// import React from "react";

import "./App.css";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import { useState } from "react";

const App = () => {
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy, {
      successDuration:1000
  });


  const startListening= () => SpeechRecognition.startListening({ continuous: true , language : 'en-IN' });

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return alert('no browsersupport');
  }
  return (
    <>
      <div className="container">
        <h2>Speech to Text</h2>
        <br />
        <p>A React hook that converts speech from microphone to text and makes it available to your React components.</p>

        <p>Note: To copy written text, firstly click once on the white board after clicking Stop button.</p>
        <div className="main-content" onClick={() => setTextToCopy(transcript)}>
              { transcript}
        </div>

        <div className="btn-style">

        <button onClick={setCopied}>
              {isCopied ? 'Copied!' : 'Copy to clipboard!'}
        </button>

          <button onClick={startListening}>Start Listening</button>
          <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
          </div>
      </div>
    </>
  )
}

export default App
