import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./index.css";
import data from './store';

function Header(){
  console.log(data);
  return (
    <div style={{ background: "grey" }}>
      <Link style={{ marginRight: "15px" }} to="/">
        Home
      </Link>
      <Link to="/products">Products</Link>
    </div>
  );
}

function ProductDetails(props){
  return (
    <div>
      <h1>{props.name}</h1>
      <p>price: {props.price}</p>
      <img src={props.img} />
    </div>
  )
}

class Products extends React.Component{
  state = {};


  componentDidMount(){
    for (let prod of data){
      let name = prod.title.split(' ').join('_');
      this.setState({[name]:[prod.price, prod.imageUrl]})
    }
  }

  componentDidUpdate(){
    console.log(this.state);
  }

  render(){
    return (
      <div>
        {Object.keys(this.state).map((prod) => {
          return <Link to={`/products/${prod}`}>{prod} </Link>;
        })}
      </div>
    );
  }
}

function Jacket(){
  return (
    <div>
      <h1>{data[0].title}</h1>
      <p>price: {data[0].price}</p>
      <img src={data[0].imageUrl} />
      <button><Link to='/'>Back</Link></button>
    </div>
  )
}

function Jeans(){
  return (
    <div>
      <h1>{data[1].title}</h1>
      <p>price: {data[1].price}</p>
      <img src={data[1].imageUrl} />
      <button>
        <Link to="/">Back</Link>
      </button>
    </div>
  );
}

function Tie(){
  return (
    <div>
      <h1>{data[2].title}</h1>
      <p>price: {data[2].price}</p>
      <img src={data[2].imageUrl} />
      <button>
        <Link to="/">Back</Link>
      </button>
    </div>
  );
}

function Hat(){
  return (
    <div>
      <h1>{data[3].title}</h1>
      <p>price: {data[3].price}</p>
      <img src={data[3].imageUrl} />
      <button>
        <Link to="/">Back</Link>
      </button>
    </div>
  );
}

function HomePage(props) {
  return <div></div>;
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={HomePage} />
      <Route path="/products" component={Products} />
      <Route path="/products/Stylish_hat" component={Hat} />
      <Route path="/products/Beautiful_Jacket" component={Jacket} />
      <Route path="/products/Fashionable_Jeans" component={Jeans} />
      <Route path="/products/Smart_tie" component={Tie} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
