import { BinaryClient } from 'binaryjs-client';

navigator.getUserMedia = (navigator.getUserMedia ||
                          navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia ||
                          navigator.msGetUserMedia);


let Stream;
let recordingFlag = false;
/* eslint wrap-iife: [2, "inside"] */
/* eslint no-param-reassign: 0 */
export class Recorder {
  constructor(client, recording) {
    this.client = client;
    this.recording = recording;
  }

  createClient() {
    this.client = new BinaryClient('ws://localhost:9001');
    this.client.on('open', () => {
      Stream = this.client.createStream();

      function convertoFloat32ToInt16(buffer) {
        let l = buffer.length;
        const buf = new Int16Array(l);
        /* eslint no-plusplus: [0,{ "allowForLoopAfterthoughts": true }] */
        /* eslint space-infix-ops: 0 */
        while (l--) {
          buf[l] = buffer[l] * 0xFFFF; // convert to 16 bit
        }
        return buf.buffer;
      }

      if (navigator.mediaDevices) {
        console.log('getUserMedia supported.');

        const p = navigator.mediaDevices.getUserMedia({ audio: true, video: false });
        /* eslint prefer-arrow-callback: 0 */
        p.then(function (e) {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          const context = new AudioContext();

          // the sample rate is in context.sampleRate
          const audioInput = context.createMediaStreamSource(e);

          const bufferSize = 2048;
          const recorder = context.createScriptProcessor(bufferSize, 1, 1);

          recorder.onaudioprocess = function (e) {
            if (!recordingFlag) {
              audioInput.disconnect(this);
              this.disconnect(recorder.destination);
              // alert('...end recording');
              return;
            }
            console.log('recording');
            const left = e.inputBuffer.getChannelData(0);
            Stream.write(convertoFloat32ToInt16(left));
          };

          audioInput.connect(recorder);
          recorder.connect(context.destination);
        });

        p.catch(err => alert(err.name));
      } else {
        alert('Your browser does not support audio recording');
      }
    });

    /*
    client.on('close', function() {
      alert('Stream.end');

      if (fileWriter != null) {
        fileWriter.end();
      }
    });
    */
  }

  startRecording() {
    this.recording = true;
    recordingFlag = true;
  }

  stopRecording() {
    this.recording = true;
    recordingFlag = false;
    if (typeof (Stream) !== 'undefined') {
      Stream.end();
      // this.client.close();
    }
  }

}
