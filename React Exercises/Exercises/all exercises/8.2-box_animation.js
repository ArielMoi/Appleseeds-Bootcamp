import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

class MovingDivs extends React.Component {
  state = {update:false}

  componentDidMount(){
    setTimeout(() => {
      document.querySelector("#one").classList.add("box1");
      document.querySelector("#two").classList.add("box2");
      document.querySelector("#three").classList.add("box3");
    },1000)

    this.setState({update:true})
  }

  componentDidUpdate(){
    setTimeout(() => {
      document.querySelector("#one").classList.remove("box1");
      document.querySelector("#two").classList.remove("box2");
      document.querySelector("#three").classList.remove("box3");
    }, 5000)
  }

  render(){
    return (
      <div>
        <div id='one'></div>
        <div id='two'></div>
        <div id='three'></div>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <MovingDivs />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
