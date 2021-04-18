import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from "axios";

function GetFromApi() {
  const [allData, setAllData] = useState([]);
  const [specificData, setSpecific] = useState({});

  const getAllData = async () => {
    const data = await axios.get("http://localhost:8000/api/movies");
    return data;
  };

  const getSpecificData = async (movie) => {
    const data = await axios.get(`http://localhost:8000/api/movies/${movie}`);
    return data;
  };

  const deleteMovie = async (movie) => {
    const data = await axios.delete(
      `http://localhost:8000/api/movies/${movie}`
    );

    return data;
  };

  const postMovie = async (movie) => {
    const data = await axios.post("http://localhost:8000/api/movies", {
    title: movie.title,
    id: movie.id,
    year: movie.year,
    rating: movie.rating,
    genre: movie.genre
    })

    return data;
  }

  useEffect(() => {
    console.log(getAllData());
    setAllData(getAllData());
  }, [])

  return (
    <div>
      {allData}
      {allData.map(d => <p>{d}</p>)}
    </div>
  )

}

ReactDOM.render(
  <React.StrictMode>
    <GetFromApi />
  </React.StrictMode>,
  document.getElementById("root")
);
