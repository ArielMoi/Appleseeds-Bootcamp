import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

let colors = ['blue', 'red', 'yellow', 'green', 'orange']
let num = 0;
class ChangingColor extends React.Component {
  state = {color:colors[num]}

  componentDidMount(){
    this.setState({ color: colors[num] });
  }

  componentDidUpdate(){
    if (num === 4){
      num = -1;
    }
    setTimeout(() => {
      this.setState({ color: colors[++num] });
    }, 1000)
  }

  render(){
    return (
      <div style={{background: `${this.state.color}`}}>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ChangingColor />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
