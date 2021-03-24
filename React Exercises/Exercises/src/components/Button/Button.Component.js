import "./Button.css";

function Button(props) {
  return (
    <button onClick={props.onClickFunc}>
      <i className={props.i}></i> {props.buttonText}
    </button>
  );
}

export default Button;
