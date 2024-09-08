import React, { useEffect, useRef, useState } from 'react';

const AudioStreamer = ({ onStreamInitialized }) => {
  const localAudioElement = useRef(null);
  const remoteAudioElement = useRef(null);
  const [webrtcConnection, setWebrtcConnection] = useState(null);

  useEffect(() => {
    const peerConnection = new RTCPeerConnection();
    setWebrtcConnection(peerConnection);

    // Get local audio stream
    navigator.mediaDevices.getUserMedia({ audio: true }).then((localStream) => {
      localAudioElement.current.srcObject = localStream;
      localStream.getTracks().forEach((track) => peerConnection.addTrack(track, localStream));
      onStreamInitialized(localStream); // Callback to send stream for filters and visualizer
    });

    // Handle incoming remote stream
    peerConnection.ontrack = (event) => {
      remoteAudioElement.current.srcObject = event.streams[0];
    };

    return () => peerConnection.close();
  }, [onStreamInitialized]);

  return (
    <div>
      <h2>Local Audio</h2>
      <audio ref={localAudioElement} autoPlay muted />
      <h2>Remote Audio</h2>
      <audio ref={remoteAudioElement} autoPlay />
    </div>
  );
};

export default AudioStreamer;
