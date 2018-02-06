Backend for a Language Learning App
===================================

## Usage
Assuming you have Node.js@lts and git@^2.7.4 installed on
your system follow the next steps.

After clone the whole project (backend and frontend) 

```bash
# git clone https://github.com/damor4321/jlearning # optionally, specify the directory in which to clone
```bash

Go to the Backend directory and install the node_modules:

```bash
~$ cd path/to/install/jlearning_back
~$ npm install
```

### Sphinx Spanish Acoustic Model Instalation
To use Spanish as Target language you need to download the Sphinx Model from: https://sourceforge.net/projects/cmusphinx/files/Acoustic%20and%20Language%20Models/Spanish/cmusphinx-es-5.2.tar.gz/download

Then decompress cmusphinx-es-5.2.tar.gz into jlearning_front, replacing the current empty folder cmusphinx-es-5.2.

### Development Mode
To start the development mode use the following command.
```
~$ npm start
```
### Production
To build a production app.
```
~$ npm build
```
To serve the production app.
```
~$ npm run start:production
```
