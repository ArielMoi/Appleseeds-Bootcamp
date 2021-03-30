import React from "react";

class Increment extends React.Component {
  constructor(props) {
    super(props);

    this.state = { amount: 0, color: "black" };
    this.Increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.updateColor = this.updateColor.bind(this);
  }

  increment() {
    if (this.state.amount < 10) {
      this.setState({ amount: this.state.amount + 1 });
    }
  }

  decrement() {
    if (this.state.amount > -10) {
      this.setState({ amount: this.state.amount - 1 });
    }
  }

  updateColor() {
    if (this.state.amount > -10 && this.state.amount < 0) {
      this.setState({ color: "red" });
    }
    if (this.state.amount < 10 && this.state.amount > 0) {
      this.setState({ color: "green" });
    }
    if (this.state.amount == 0) {
      this.setState({ color: "black" });
    }
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.updateColor();
            this.Increment();
          }}
        >
          increment
        </button>
        <button
          onClick={() => {
            this.updateColor();
            this.decrement();
          }}
        >
          decrement
        </button>
        <p style={{ color: `${this.state.color}` }}>{this.state.amount}</p>
      </div>
    );
  }
}

function App() {
  return <Increment />;
}

export default App;
