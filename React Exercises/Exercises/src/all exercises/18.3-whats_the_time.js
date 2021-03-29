import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function MultiInput(){
  const [valueInS, setValue] = React.useState(0)

  const onChangeFunc = (value, time) => {
    console.log(value, time);
    time === 's' && setValue(value);
    time === 'm' && setValue(value * 60);
    time === 'h' && setValue(value * 60 * 60);
  }

  return (
    <div>
      <label>sec</label>
      <input
        type="text"
        value={valueInS}
        onChange={(e) => onChangeFunc(e.target.value, "s")}
      />
      <br />
      <label>min</label>
      <input
        type="text"
        value={Number(valueInS) / 60}
        onChange={(e) => onChangeFunc(e.target.value, "m")}
      />
      <br />
      <label>hours</label>
      <input
        type="text"
        value={Number(valueInS) / 60 / 60}
        onChange={(e) => onChangeFunc(e.target.value, "h")}
      />
      <br />
    </div>
  );
}

ReactDOM.render(<MultiInput />, document.getElementById("root"));
