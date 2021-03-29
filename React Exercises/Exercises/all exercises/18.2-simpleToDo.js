import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const data = [
  { name: "CSS", completed: true },
  { name: "JavaScript", completed: true },
  { name: "Learn React", completed: false },
  { name: "Learn mongoDB", completed: false },
  { name: "Learn Node JS", completed: false },
];

function SimpleToDo() {
  const onClickFunc = (e) => {
    let newtodo = todolist.map(el => {
      return el == e ? {name: e.name, completed: !e.completed} : el;
    })
    setTodo(newtodo)
  };

  let [todolist, setTodo] = React.useState(data);

  return (
    <div>
      {todolist.map((e) => {
        return (
          <div>
            <p>{e.name}</p>
            <p onClick={() => onClickFunc(e)}>
              {e.completed ? "complete" : "not"}
            </p>
          </div>
        );
      })}
    </div>
  );
}

ReactDOM.render(<SimpleToDo />, document.getElementById("root"));
