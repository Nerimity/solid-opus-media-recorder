 
import "./init";

import OpusMediaRecorder from 'opus-media-recorder';

// @ts-ignore: Unreachable code error
import EncoderWorker from 'opus-media-recorder/encoderWorker.umd.js?url';
// @ts-ignore: Unreachable code error
import OggOpusWasm from 'opus-media-recorder/OggOpusEncoder.wasm?url';
// @ts-ignore: Unreachable code error
import WebMOpusWasm from 'opus-media-recorder/WebMOpusEncoder.wasm?url';


const workerOptions = {
  encoderWorkerFactory: function () {
    return new Worker(EncoderWorker);
  },
  OggOpusEncoderWasmPath: OggOpusWasm,
  WebMOpusEncoderWasmPath: WebMOpusWasm
};  

let recorder: MediaRecorder | undefined;

export const useMicRecorder = () => {
  
  const record = () => new Promise<Blob>(res => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      recorder = new OpusMediaRecorder(stream, { mimeType: 'audio/ogg' }, workerOptions);
      recorder.start();

      recorder.addEventListener('dataavailable', (e) => {
        res(e.data)
      });
    });
  })

  const stop = () => {
    recorder?.stop();
    recorder?.stream.getTracks().forEach(i => i.stop());
  }

  return {
    record,
    stop
  }

}
