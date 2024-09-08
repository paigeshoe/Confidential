import React, { useState } from 'react';
import AudioStreamer from './AudioStreamer';
import AudioFilterController from './AudioFilterController';
import AudioVisualizer from './AudioVisualizer';
import './App.css';

const App = () => {
  const [audioStream, setAudioStream] = useState(null);

  return (
    <div className="container">
      <h1>Audio Streaming App</h1>
      <AudioStreamer onStreamInitialized={(stream) => setAudioStream(stream)} />
      {audioStream && (
        <>
          <AudioFilterController audioStream={audioStream} />
          <AudioVisualizer audioStream={audioStream} />
        </>
      )}
      <div className="footer">Built with React & WebRTC</div>
    </div>
  );
};

export default App;

