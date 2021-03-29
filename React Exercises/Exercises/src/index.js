import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const dataToDo = [
{ name: "CSS", completed: true },
{ name: "JavaScript", completed: true },
{ name: "Learn React", completed: false },
{ name: "Learn mongoDB", completed: false },
{ name: "Learn Node JS", completed: false },
]

function SimpleToDo(data) {
  console.log(data);
  const [datato, setData] = data.map(todo => {
      return(
        <div>
        <h1>{todo.name}</h1>
        <p>{todo.completed ? 'complete' : 'no complete'}</p>
        </div>
      )
    })

  return (<div>
    {datato}
  </div>)
}

ReactDOM.render(
  <SimpleToDo data={dataToDo} />,
  document.getElementById("root")
);
