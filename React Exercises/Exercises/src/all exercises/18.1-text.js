import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function ReadMoreText(props){
  const [isReadMore, readMore] = React.useState(false)

  const updateIsReadMore = (toReadMore) => {
    readMore(toReadMore)
  }

  if (!isReadMore) {
    return (
      <div>
        <p>
          {props.text.slice(0, props.maxLength)}{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => updateIsReadMore(true)}
          >
            Read More
          </span>
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <p>
          {props.text}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => updateIsReadMore(false)}
          >
            Read less
          </span>
        </p>
      </div>
    );
  }
}

ReactDOM.render(<ReadMoreText text='lsd jkdj jk' maxLength='5' />, document.getElementById("root"));
