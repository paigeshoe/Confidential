import React, { useState } from 'react';
import AudioStreamer from './AudioStreamer';
import AudioFilterController from './AudioFilterController';
import AudioVisualizer from './AudioVisualizer';

const App = () => {
  const [audioStream, setAudioStream] = useState(null);

  return (
    <div>
      <h1>Peer-to-Peer Audio Streaming App</h1>
      <AudioStreamer onStreamInitialized={(stream) => setAudioStream(stream)} />
      {audioStream && (
        <>
          <AudioFilterController audioStream={audioStream} />
          <AudioVisualizer audioStream={audioStream} />
        </>
      )}
    </div>
  );
};

export default App;
