import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import "./index.css";

function Search(props){

  const [searchInput, setSearch] = useState('');

  return (
    <div>
      <input type='text' onChange={(event) => setSearch(event.target.value)}/>
      <button onClick={() => props.searchFunc(searchInput)}>Search</button>
    </div>
  )
}

function AlgoliaSearch(){

  const [searchInput, setSearchInput] = useState('hooks');
  const [apiData, setApiData] = useState([])

  useEffect(async () => {
    const { data } = await axios.get(
      `https://hn.algolia.com/api/v1/search?query={${searchInput}}`
    );
    console.log(data);
    setApiData(data.hits);
  }, [searchInput]);

  const search = (value) => {
    setSearchInput(value);
  }

  return (
    <div>
      <Search searchFunc ={search}/>
      {apiData.map((d) => {
        return (
          <div>
            <p>{d.title}</p>
            <a href={d.url}>Link - {d.url}</a>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
}

ReactDOM.render(<AlgoliaSearch />, document.getElementById("root"));
