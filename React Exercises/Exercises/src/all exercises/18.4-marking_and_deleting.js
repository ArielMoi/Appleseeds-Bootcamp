import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const list = ["one", "two", "three", "four", "five"];

function CheckBox(props) {
  const [mylist, setList] = React.useState(list.map((i) => [i, false]));
  const [values, setValues] = React.useState(mylist.map((i) => false));

  const deleteFunc = () => {
    let indexes = [];

    values.forEach((el, i) => el === false && indexes.push(i))

    let newList = mylist.map((e, i) => {
      return indexes.includes(i) && e
    });

    setList(newList);
    setValues(mylist.map((el) => false));
  };

  const reset = () => {
    const newList = list.map((i) => [i, false]);
    setList(newList);
    setValues(mylist.map((el) => false));
    // console.log(mylist);
  };

  const updateChecked = (e) => {
    // const newlist = mylist.map(el => el[0] !== e[0] ? el : [e[0], !e[1]] )
    setValues(values.map((el, i) => (i == e ? !el : el)));
  };

  return (
    <div>
      <button onClick={deleteFunc}>delete</button>
      <button onClick={reset}>reset</button>
      {mylist.map((i, index) => {
        // console.log(index);
        return (
          <div>
            <input
              type="checkbox"
              checked={values[index]}
              onClick={() => updateChecked(index)}
            />
            <label>{i}</label>
          </div>
        );
      })}
    </div>
  );
}

ReactDOM.render(<CheckBox list={list} />, document.getElementById("root"));
