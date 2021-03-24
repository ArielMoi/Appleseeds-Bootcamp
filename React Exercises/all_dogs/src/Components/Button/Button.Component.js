import "./Button.css";

function Button(props) {
  return (
    <button className="btn" onClick={props.onClickFunc} id={props.buttonId}>
      <i className={`${props.i} btn-icon`}></i> {props.buttonText}
    </button>
  );
}

export default Button;
