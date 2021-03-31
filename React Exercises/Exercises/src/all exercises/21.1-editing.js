import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import "./index.css";

function Input(props) {
  const input = useRef(null);

  return <input ref={props.input} type="text" />;
  // return <input ref={input} type='text' style={{visibility: props.isHidden}}/>
}

function EditInput() {
  const [isEdit, setIsEdit] = useState(true);
  const input = useRef(null);

  const onClickFunc = () => {
    setIsEdit(!isEdit);
    if (isEdit == false) {
      input.current.style.visibility = "hidden";
    } else {
      input.current.style.visibility = "visible";
    }
  };

  useEffect(() => {
    input.current.style.visibility = "hidden";
  }, []);

  return (
    <div>
      {/* <Input isHidden={isEdit ? "hidden" : "visible"} /> */}
      <input type="text" ref={input} />
      <button onClick={onClickFunc}>{isEdit ? "edit" : "submit"}</button>
    </div>
  );
}

ReactDOM.render(<EditInput />, document.getElementById("root"));
