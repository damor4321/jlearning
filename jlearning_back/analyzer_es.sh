#!/bin/bash -
# module to convert 48000 sample rate to 16 for julius compatibility
# step 2 analyzing japanese wav on julius (get a output file)
sox demo.wav -r 16000 sampleGoodRate.wav
resp=$(pocketsphinx_continuous -hmm cmusphinx-es-5.2/model_parameters/voxforge_es_sphinx.cd_ptm_4000 -lm cmusphinx-es-5.2/etc/es-20k.lm  -logfn analysis.log -dict cmusphinx-es-5.2/etc/voxforge_es_sphinx.dic -infile sampleGoodRate.wav)
echo $resp
