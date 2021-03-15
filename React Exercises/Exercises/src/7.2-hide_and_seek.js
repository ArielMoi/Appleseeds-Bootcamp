import React from "react";

class HideAndSeek extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      box: (
        <div
          style={{
            background: "yellow",
            width: "50px",
            height: "50px",
            margin: "5px",
          }}
        ></div>
      ),
    };

    this.hide = this.hide.bind(this);
  }

  hide() {
    if (this.state.box) {
      this.setState({ box: null });
    } else {
      this.setState({
        box: (
          <div
            style={{
              background: "yellow",
              width: "50px",
              height: "50px",
              margin: "5px",
            }}
          ></div>
        ),
      });
    }
  }

  render() {
    return (
      <div
        style={{ border: "1px solid black", padding: "10px", width: "100px" }}
      >
        <button onClick={this.hide}>show/hide</button>
        <div>{this.state.box}</div>
      </div>
    );
  }
}

function App() {
  return <HideAndSeek />;
}

export default App;
