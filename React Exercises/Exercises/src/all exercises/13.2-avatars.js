import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Input(props){
  return (
    <input type='text' onChange={props.onChangeFunc}></input>
  )
}

function Button(props){
  return <button onClick={props.onClickFunc}>{props.text}</button>;
}

function Card(props){
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.img}></img>
    </div>
  )
}

class RandomAvatar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    
  }
  state ={}
  random = async () => {
    let {data} = await axios
      .get("https://randomuser.me/api/")
    
    let name = `${data.results[0].name.first}-${data.results[0].name.last}`
    this.setState({[name]: data.results[0].picture.medium})
  };

  a = async() => {
    for (let i = 0; i < 10; i++){
      await this.random();
    }
  }
  componentDidMount(){
    this.a();
  }


  render(){
    let count = -1;
    return (<div>
      {Object.keys(this.state).map((name) => {
        return <Card name={name} img={this.state[name]} key={++count}/>
      })}
    </div>)
  }
}


ReactDOM.render(
  <React.StrictMode>
    <RandomAvatar />
  </React.StrictMode>,
  document.getElementById("root")
);
