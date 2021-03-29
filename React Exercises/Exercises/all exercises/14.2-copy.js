import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class TextArea extends React.Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
    this.buttonRef = React.createRef();
  }

  componentDidMount() {
    this.myRef.current.focus();
  }

  onClick = () => {
    this.myRef.current.select();
    document.execCommand('copy');
    alert('the text was copied!')
  }

  render() {
    return (
      <div>
        <textarea ref={this.myRef} />
        <button onClick={this.onClick} ref={this.buttonRef}>mark</button>
      </div>
    );
  }
}

ReactDOM.render(<TextArea />, document.getElementById("root"));
