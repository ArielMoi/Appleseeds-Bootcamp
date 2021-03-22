import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class CheckInput extends React.Component {
  state = { checked: this.props.isChecked };

  updateState = async (e) => {
    await this.setState({ checked: e.target.checked });
  };

  render() {
    return (
      <div>
        <label>{this.props.text}</label>
        <input
          type="Checkbox"
          checked={this.state.checked}
          onChange={(e) => {
            this.updateState(e);
          }}
        ></input>
      </div>
    );
  }
}

class Checkbox extends React.Component {
  render() {
    return (
      <div>
        <form>
          <CheckInput text="one" isChecked={true} />
          <CheckInput text="two" isChecked={true} />
          <CheckInput text="three" isChecked={false} />
          <CheckInput text="four" isChecked={false} />
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Checkbox />
  </React.StrictMode>,
  document.getElementById("root")
);
