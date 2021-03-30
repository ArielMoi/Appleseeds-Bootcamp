import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import "./index.css";

const dataForCarousel = [
  {
    header: "doggie",
    subHeader: "this is Dog",
    imgUrl:
      "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=620&quality=85&auto=format&fit=max&s=56d5de4c5609ca98def0c3382bd569b4",
  },
  {
    header: "cat",
    subHeader: "hi im cat",
    imgUrl:
      "https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg",
  },
  {
    header: "seal",
    subHeader: "hi im seal",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c0/Seal_2012_%28cropped%29.jpg",
  },
];

let current = 0;
function Carousel() {
  
  const [currentObj, setCurrentObj] = useState(dataForCarousel[current]);

  const carousleStyle = {
    margin: "10%",
    marginTop: "5px",
    padding: "15px",
    position: "relative",
    width: '500px',
  };

  const imgStyle = {
    position: "absolute",
    width: "100%",
    zIndex: -1,
  };

  const headerStyle = {
    position: "absolute",
    top: "10px",
  };

  const subHeaderStyle = {
    position: "absolute",
    top: "40px",
    color: "red",
  };

  const arrowLeftStyle = {
    position: "absolute",
    top: "200px",
    left: "20px",
    color: "red",
    cursor: "pointer",
  };

  const arrowRightStyle = {
    position: "absolute",
    top: "200px",
    right: "20px",
    color: "red",
    cursor: "pointer",
  };

  const onClickRight = () => {
    current = current == 2 ? 0 : current + 1;
    setCurrentObj(dataForCarousel[current]);
  };

  const onClickLeft = () => {
    current = current == 0 ? 2 : current - 1;
    setCurrentObj(dataForCarousel[current]);
  };

  return (
    <div style={{ ...carousleStyle }}>
      <img src={currentObj.imgUrl} style={{ ...imgStyle }} />
      <h2 style={{ ...headerStyle }}>{currentObj.header}</h2>
      <h6 style={{ ...subHeaderStyle }}>{currentObj.subHeader}</h6>
      <i
        class="fas fa-arrow-left"
        style={{ ...arrowLeftStyle }}
        onClick={onClickLeft}
      ></i>
      <i
        class="fas fa-arrow-right"
        style={{ ...arrowRightStyle }}
        onClick={onClickRight}
      ></i>
    </div>
  );
}

ReactDOM.render(<Carousel />, document.getElementById("root"));
