import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import "./index.css";

function ToBlackAndWhite(){
  const firstImage = useRef(null)
  const secondImage = useRef(null)

  const firstImageFunc = (blackAndWhite=true) => {
    if (blackAndWhite){
      firstImage.current.style.filter = "grayscale(100%)";
    }else{
      firstImage.current.style.filter = "grayscale(0%)";
    }
  }

  const secondImageFunc = (blackAndWhite=true) => {
    if (blackAndWhite){
      secondImage.current.style.filter = "grayscale(100%)";
    }else{
      secondImage.current.style.filter = "grayscale(0%)";
    }
  }

  return (
    <div>
      <img
        src="https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg?width=1020&quality=85&auto=format&fit=max&s=a051cbae7af4a687e5dde62d66a4b292"
        ref={firstImage}
        onMouseEnter={firstImageFunc}
        onMouseLeave={() => firstImageFunc(false)}
      />
      <img
        src="https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg?width=1020&quality=85&auto=format&fit=max&s=a051cbae7af4a687e5dde62d66a4b292"
        ref={secondImage}
        onMouseEnter={secondImageFunc}
        onMouseLeave={() => secondImageFunc(false)}
      />
    </div>
  );
}

ReactDOM.render(<ToBlackAndWhite />, document.getElementById("root"));
