import React from "react";

class Increment extends React.Component {
  constructor(props) {
    super(props);

    this.state = { amount: 0 };
    this.Increment = this.increment.bind(this);
  }

  increment(event) {
    this.setState({ amount : (this.state.amount + 1)});
  }

  render() {
    return (
      <div>
        <button onClick={this.Increment}>increment</button>
        <p>{this.state.amount}</p>
      </div>
    );
  }
}

export default Increment;
