import React, { useEffect, useRef } from 'react';

const AudioVisualizer = ({ audioStream }) => {
  const visualizerCanvasRef = useRef(null);
  const audioCtxVisualizerRef = useRef(null);
  const audioAnalyserRef = useRef(null);

  useEffect(() => {
    if (audioStream) {
      const audioContext = new AudioContext();
      const analyserNode = audioContext.createAnalyser();
      const sourceNode = audioContext.createMediaStreamSource(audioStream);
      sourceNode.connect(analyserNode);

      analyserNode.fftSize = 2048;
      const bufferLength = analyserNode.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      audioCtxVisualizerRef.current = audioContext;
      audioAnalyserRef.current = analyserNode;

      const drawWaveform = () => {
        const canvas = visualizerCanvasRef.current;
        const canvasContext = canvas.getContext('2d');

        analyserNode.getByteTimeDomainData(dataArray);

        // Clear the canvas before each draw
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the waveform
        canvasContext.beginPath();
        const sliceWidth = (canvas.width * 1.0) / bufferLength;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
          const v = dataArray[i] / 128.0;
          const y = (v * canvas.height) / 2;

          if (i === 0) {
            canvasContext.moveTo(x, y);
          } else {
            canvasContext.lineTo(x, y);
          }

          x += sliceWidth;
        }

        canvasContext.lineTo(canvas.width, canvas.height / 2);
        canvasContext.stroke();

        requestAnimationFrame(drawWaveform);
      };

      drawWaveform();
    }
  }, [audioStream]);

  return <canvas ref={visualizerCanvasRef} width={500} height={200} style={{ border: '1px solid black' }} />;
};

export default AudioVisualizer;
