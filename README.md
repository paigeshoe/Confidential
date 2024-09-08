🎧 Audio Streaming App with WebRTC, Audio Filters, and Real-time Visualization
This project demonstrates a React-based application that streams audio between two users using WebRTC. It includes real-time audio manipulation (gain and frequency filters) and visualization of the audio stream using the Web Audio API and an HTML canvas.

📋 Features
Peer-to-Peer Audio Streaming (Core requirement)

Users can stream audio between two peers using WebRTC.
Microphone audio input is captured and streamed, and users can hear the remote peer's audio.
Audio Filters (Bonus)

Real-time manipulation of the audio stream with:
Gain Control: Volume set to 75% of the original stream.
Lowpass Filter: Filters out frequencies above 200 Hz.
Users can toggle the filters on or off while streaming.
Audio Visualization (Advanced/Extra Credit)

Real-time visualization of the audio stream as a waveform.
The visualization updates in real-time as the audio plays.
🛠 Tools and Technologies
React: Core framework for managing UI components and state.
WebRTC: Used for peer-to-peer audio streaming.
Web Audio API: Applied to manipulate audio filters and visualize audio in real-time.
HTML Canvas: Used for rendering the audio waveform.
CSS (Flexbox): Styling to create a modern, responsive user interface.
🚀 Installation and Setup
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/audio-streaming-app.git
cd audio-streaming-app
Install dependencies:

bash
Copy code
npm install
Run the app:

bash
Copy code
npm start
Open your browser and navigate to http://localhost:3000 to see the application in action.

🧩 Project Structure
src/AudioStreamer.js:

Manages WebRTC peer-to-peer audio streaming.
src/AudioFilterController.js:

Implements gain and frequency filters using the Web Audio API.
src/AudioVisualizer.js:

Handles real-time visualization of the audio stream.
src/App.js:

The main component that connects everything together.
src/App.css:

Custom styles for a modern and responsive user interface.
🎨 UI Design
The app uses a clean, minimal design with a responsive layout. Some key UI design choices:

Centered Layout: The main elements (audio player, buttons, and canvas) are centered for clarity and focus.
Buttons: Large, interactive buttons with hover effects for toggling audio filters.
Waveform Visualization: Real-time audio waveform displayed on a canvas, with smooth transitions.
🧪 Approach and Challenges
Approach:
Audio Streaming: WebRTC was used to handle the core requirement of streaming audio between two users. The RTCPeerConnection API manages the connection, and getUserMedia() captures audio from the microphone.

Audio Filters: The Web Audio API’s GainNode and BiquadFilterNode were employed to manipulate the audio stream. Users can toggle the gain and lowpass filter in real-time while streaming audio.

Real-time Visualization: An AnalyserNode from the Web Audio API extracts frequency data from the audio stream. The data is then drawn as a waveform using an HTML canvas element, with continuous updates to reflect changes in the audio.

Challenges:
WebRTC Setup: Establishing a peer-to-peer connection using WebRTC requires a signaling server to exchange session details between peers. For simplicity, the demo focuses on local and remote streams but doesn’t implement the signaling server.

Audio Context Management: Applying real-time audio filters without disrupting the stream was complex. Managing the Web Audio API’s audio context to ensure smooth transitions between filtered and unfiltered audio required careful handling.

Efficient Visualization: Rendering real-time visualizations with the canvas required optimizing how frequently the waveform updates to ensure smooth and performant animation.

📝 Future Improvements
Signaling Server: Implement a WebSocket or Firebase-based signaling server to handle the peer connection between users across different machines.
Advanced Audio Manipulation: Add more advanced filters, such as echo or reverb, to further demonstrate the power of the Web Audio API.
Customization: Allow users to control the gain value and frequency range dynamically, giving more flexibility to the audio filters.
