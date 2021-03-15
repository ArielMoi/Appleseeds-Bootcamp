import React from 'react';
import "./card.css";

const Card = (props) => {
    return (
      <div className="container">
        <div>
          <img src={props.src}></img>
        </div>
        <div>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <div className="links">
            <a href={props.link1}>{props.link1text}</a>
            <a href={props.link2}>{props.link2text}</a>
          </div>
        </div>
      </div>
    );
}

export default Card;