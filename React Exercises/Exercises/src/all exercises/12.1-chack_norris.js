import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class OptionsBoard extends React.Component {
  state = { options: "" };

  componentDidMount = async () => {
    const { data } = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );
    this.setState({ options: data });
  };

  render() {
    return (
      <div>
        <div>
          {[...this.state.options].map((category) => {
            return (
              <div>
                <input type="checkbox" className={category} onClick={this.props.onClickfunc} />
                <label>{category}</label>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

class JokeBoard extends React.Component {
  state = { category: "animal", joke: "" };

  onClickFunction = async (cate) => {
    await this.setState({category:cate})

    let {data} = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${this.state.category}`
    );

    this.setState({joke: data.value})
  };

  render(){
    return (
      <div>
        <OptionsBoard onClickfunc={(e) => {
          this.onClickFunction(e.target.classList[0]) 
        }} />
        <p>{this.state.joke}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <JokeBoard />
  </React.StrictMode>,
  document.getElementById("root")
);
