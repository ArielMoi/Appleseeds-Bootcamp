import React, {useState, useEffect} from "react";
import axios from 'axios'
import ReactDOM from "react-dom";
import "./index.css";

function UseApi(){

  const [data, setData] = useState([])

  useEffect(async() => {
    const response = await axios.get("https://api.chucknorris.io/jokes/random");
    setData(response.data)
  }, [])

  return (
    <div>
      <h1>{data.url}</h1>
      <h6>{data.value}</h6>
    </div>
  )
}

ReactDOM.render(<UseApi />, document.getElementById("root"));
