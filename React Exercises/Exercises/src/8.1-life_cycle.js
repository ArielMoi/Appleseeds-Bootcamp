import React from "react";


class FavoriteColor extends React.Component {
  state = { favoriteColor: "blue"};

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "red" });
      this.setState({ update: 1 });
    }, 1000);
  }

  componentDidUpdate() {
    document.querySelector("#a").innerText = `The updated favorite color is ${this.state.favoriteColor} `;
  }

  render() {
    return (
      <div id="">
        <h1>my favorite color is {this.state.favoriteColor}</h1>
        <div id="a"></div>
      </div>
    );
  }
}

function App() {
  return <FavoriteColor />;
}

export default App;
