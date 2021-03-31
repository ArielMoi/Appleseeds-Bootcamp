import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import "./index.css";

function VideoPlayer(){
  const videoRef = useRef(null)

  return (
    <div>
      <video ref={videoRef} width="750" height="500" controls>
        {/* <source
          src="https://www.youtube.com/embed/b8HTGMrTCgU"
          type="video/mp4"
        /> */}
        <source src="Keys.mp4/" type="video/mp4" />
      </video>
      <button onClick={() => videoRef.current.pause()}>stop</button>
      <button onClick={() => videoRef.current.start()}>start</button>
    </div>
  );
}

ReactDOM.render(<VideoPlayer />, document.getElementById("root"));
