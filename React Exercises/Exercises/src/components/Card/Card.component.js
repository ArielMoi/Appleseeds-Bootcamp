import React from 'react';
import "./card.css";

// const Card = (props) => {
//     return (
//       <div className="container">
//         <div>
//           <img src={props.src}></img>
//         </div>
//         <div>
//           <h1>{props.title}</h1>
//           <p>{props.description}</p>
//           <div className="links">
//             <a href={props.link1}>{props.link1text}</a>
//             <a href={props.link2}>{props.link2text}</a>
//           </div>
//         </div>
//       </div>
//     );
// }

class Card extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
          <div className="container">
            <div>
              <img src={this.props.src}></img>
            </div>
            <div>
              <h1>{this.props.title}</h1>
              <p>{this.props.description}</p>
              <div className="links">
                <a href={this.props.link1}>{this.props.link1text}</a>
                <a href={this.props.link2}>{this.props.link2text}</a>
              </div>
            </div>
          </div>
        );
    }
}

export default Card;