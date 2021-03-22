import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


class Spinner extends React.Component {
  state = {spinner:true}

  componentDidMount(){
    setTimeout(()=>{
      this.setState({spinner:false})
    },5000)
  }

  componentDidUpdate(){
    document.querySelector('.loader').classList.remove('loader')
  }

  render(){
    return <div className="loader"></div>
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Spinner />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
