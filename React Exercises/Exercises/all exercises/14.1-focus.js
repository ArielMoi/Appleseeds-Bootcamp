import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.myRef.current);
    this.myRef.current.focus();
  }

  render() {
    return <input type="text" ref={this.myRef}/>;
  }
}

ReactDOM.render(<Input />, document.getElementById("root"));
