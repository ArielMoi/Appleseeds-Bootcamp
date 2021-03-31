import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import "./index.css";

// const CancelToken = axios.CancelToken;
// const source = CancelToken.source();

function ToggleInfo() {
  const [isToggled, setIsToggle] = useState(true);
  const [data, setData] = useState("");

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    async function getData() {
      if (isToggled) {
        const response = await axios.get(
          "https://hn.algolia.com/api/v1/search?query={hooks}",
          { cancelToken: source.token }
        );
        setData(response.data.params);
      } else {
        setData("");
      }
    }
    getData();
    return () => source.cancel(() => {console.log('canceled')});
  }, [isToggled]);

  const onClickFunc = () => {
    setIsToggle(!isToggled);
  };

  return (
    <div>
      <button onClick={onClickFunc}>toggle</button>
      {data}
    </div>
  );
}

ReactDOM.render(<ToggleInfo />, document.getElementById("root"));
