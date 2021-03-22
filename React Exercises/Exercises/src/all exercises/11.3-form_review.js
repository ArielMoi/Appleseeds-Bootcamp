import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function FormReview(props) {
  return (
    <div>
      <p>{props.fname}</p>
      <p>{props.lname}</p>
      <p>{props.gender}</p>
      <p>{props.text}</p>
    </div>
  );
}

class Checkbox extends React.Component {
  state = {
    fname: "",
    lname: "",
    gender: "",
    text: "",
  };

  showFormReview = () => {
    document.querySelector(".form-review").style.visibility = "visible";
    document.querySelector("form").style.visibility = "hidden";
  };

  hideFormReview = () => {
    document.querySelector(".form-review").style.visibility = "hidden";
    document.querySelector("form").style.visibility = "visible";
  };

  render() {
    return (
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label>first name:</label>
            <br />
            <input
              type="text"
              value={this.state.fname}
              onChange={(e) => this.setState({ fname: e.target.value })}
            ></input>
          </div>
          <div>
            <label>last name:</label>
            <br />
            <input
              type="text"
              value={this.state.lname}
              onChange={(e) => this.setState({ lname: e.target.value })}
            ></input>
          </div>
          <div>
            <label>gender</label>
            <br />
            <select
              value={this.state.gender}
              onChange={(e) => this.setState({ gender: e.target.value })}
            >
              <option disabled hidden value="">
                Choose here
              </option>
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="other">other</option>
            </select>
          </div>
          <div>
            <label>free text</label>
            <br />
            <input
              type="text"
              value={this.state.text}
              onChange={(e) => this.setState({ text: e.target.value })}
            ></input>
          </div>
          <br />
          <button type="submit" onClick={this.showFormReview}>
            continue
          </button>
        </form>
        <br />
        <br />
        <br />
        <div
          className="form-review"
          style={{ visibility: "hidden", position: "absolute", top: "0" }}
        >
          <form>
            <FormReview
              fname={this.state.fname}
              lname={this.state.lname}
              gender={this.state.gender}
              text={this.state.text}
            />
            <button
              onClick={(e) => {
                this.hideFormReview();
                e.preventDefault();
              }}
            >
              back
            </button>
            <button type="submit">submit</button>
          </form>
        </div>
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
