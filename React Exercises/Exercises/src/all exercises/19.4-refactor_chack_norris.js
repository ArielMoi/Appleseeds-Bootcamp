import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function OptionsBoard(props) {
  const [options, setOptions] = useState("");

  useEffect(async () => {
    const { data } = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );

    setOptions(data);
  }, []);

  return (
    <div>
      <div>
        {[...options].map((category) => {
          return (
            <div>
              <input
                type="checkbox"
                className={category}
                onClick={props.onClickfunc}
              />
              <label>{category}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function JokeBoard() {
  const [category, setCategory] = useState("animal");
  const [joke, setJoke] = useState("");

  const onClickFunction = async (cate) => {
    setCategory(cate);

    let { data } = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );

    setJoke(data.value);
  };

  return (
    <div>
      <OptionsBoard
        onClickfunc={(e) => {
          onClickFunction(e.target.classList[0]);
        }}
      />
      <p>{joke}</p>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <JokeBoard />
  </React.StrictMode>,
  document.getElementById("root")
);
