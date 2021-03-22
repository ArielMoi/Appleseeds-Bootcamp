import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const colors = ["red", "blue", "yellow"];

function Button(props) {
  return (
    <button style={{ background: props.color }} onClick={props.func}>
      {props.color}
    </button>
  );
}

class CustomButton extends React.Component {
  state = { text: "" };

  onClickEvent = (e) => {
    this.setState({ text: `the clicked color is ${e.target.innerText}` });
  };

  render() {
    return (
      <div>
        {colors.map((c) => {
          return <Button key={c} color={c} func={this.onClickEvent} />;
        })}
        <p>{this.state.text}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <CustomButton />
  </React.StrictMode>,
  document.getElementById("root")
);
