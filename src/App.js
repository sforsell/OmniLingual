import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FaMicrophone from 'react-icons/lib/fa/microphone';
import FaMicrophoneSlash from 'react-icons/lib/fa/microphone-slash';

  // const handleSuccess = function(stream) {
  //   window.localStream = stream;
  //   var audio = document.querySelector('audio');
    
  //   if ("srcObject" in audio) {
  //     audio.srcObject = stream;
  //   } else {
  //     audio.src = window.URL.createObjectURL(stream);
  //   }
  //   audio.onloadedmetadata = function(e) {
  //     audio.play();
  //   };
  //   // if (window.URL) {
  //   //   player.src = window.URL.createObjectURL(stream);
  //   // } else {
  //   //   player.src = stream;
  //   // }
  // };

  // poss outdated?
  // navigator.getUserMedia  = navigator.getUserMedia ||
  //                           navigator.webkitGetUserMedia ||
  //                           navigator.mozGetUserMedia ||
  //                           navigator.msGetUserMedia;
  
class App extends Component {
  constructor(){
    super()
    this.shouldStop = this.shouldStop.bind(this);
    this.record = this.record.bind(this);
  }
  
  record = () => {
    navigator.mediaDevices.getUserMedia({ audio: true, video: false })
      .then(stream => {
        window.localStream = stream;
        var audio = document.querySelector('audio');
  
          if ("srcObject" in audio) {
            audio.srcObject = stream;
          } else {
            audio.src = window.URL.createObjectURL(stream);
          }

          audio.onloadedmetadata = function(e) {
            audio.play();
          };
      })
      .catch(err => {
      console.log(err);
    });

  };

  shouldStop(){
    window.localStream.getAudioTracks()[0].stop();
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to OmniLingual</h2>
        </div>
        <div className="textbox">
          text goes here
        </div>
        <button onClick={() => {this.record()}} className="startRecording"> <FaMicrophone /> </button>
        <button onClick={() => {this.shouldStop()}} className="stopRecording"> <FaMicrophoneSlash /> </button>
        <audio > </audio>
      </div>
    );
  }
}

export default App;
