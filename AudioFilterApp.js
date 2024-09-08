import React, { useEffect, useRef, useState } from 'react';

const AudioFilterController = ({ audioStream }) => {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const audioCtxRef = useRef(null);
  const volumeControlRef = useRef(null);
  const frequencyFilterRef = useRef(null);

  useEffect(() => {
    if (audioStream) {
      // Create an AudioContext
      const audioContext = new AudioContext();
      const audioSource = audioContext.createMediaStreamSource(audioStream);
      audioCtxRef.current = audioContext;

      // Create Gain and Filter Nodes
      const gainNode = audioContext.createGain();
      const filterNode = audioContext.createBiquadFilter();
      volumeControlRef.current = gainNode;
      frequencyFilterRef.current = filterNode;

      // Set filter properties
      gainNode.gain.value = 0.75;
      filterNode.type = 'lowpass';
      filterNode.frequency.value = 200;

      // Initially connect source directly to destination
      audioSource.connect(audioContext.destination);
    }
  }, [audioStream]);

  const toggleAudioFilter = () => {
    const audioContext = audioCtxRef.current;
    const gainNode = volumeControlRef.current;
    const filterNode = frequencyFilterRef.current;

    if (isFilterActive) {
      // Disable filter
      audioContext.destination.disconnect();
      setIsFilterActive(false);
    } else {
      // Enable filter
      const source = audioContext.createMediaStreamSource(audioStream);
      source.connect(filterNode);
      filterNode.connect(gainNode);
      gainNode.connect(audioContext.destination);
      setIsFilterActive(true);
    }
  };

  return (
    <div>
      <button onClick={toggleAudioFilter}>
        {isFilterActive ? 'Disable' : 'Enable'} Audio Filter
      </button>
    </div>
  );
};

export default AudioFilterController;
