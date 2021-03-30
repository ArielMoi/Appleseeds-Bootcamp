import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import "./index.css";

function FilterInput(props){

  return (
    <>
    <label>Search</label>
    <input onChange={(event) => props.onChangeInput(event.target.value)} />
    </>
  )

}

function Countries() {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(async () => {
    const {data} = await axios.get("https://restcountries.eu/rest/v2/all");
    setCountries(data.map((c) => c.name));
    setFiltered(data.map((c) => c.name));
  }, []);

  const filterCountries = (value) => {
    setFiltered(
      countries.filter((country) =>
        country.toLowerCase().includes(value.toLowerCase())
      )
    );
  }

  return (
    <div>
      <FilterInput onChangeInput={filterCountries} />
      <ul>
        {filtered.map((c) => {
          return <li>{c}</li>;
        })}
      </ul>
    </div>
  );
}

ReactDOM.render(<Countries />, document.getElementById("root"));
