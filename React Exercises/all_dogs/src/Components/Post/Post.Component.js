import "./Post.css";
import Button from '../Button/Button.Component'

function Post(props) {
  return (
    <div>
      <div className="post">
        <h6>{props.userName}</h6>
        <img src={props.imgSrc} alt={props.imgAlt} />
        <div className="post-mes">
          <p>{props.postMessage}</p>
        </div>
        <div className="buttons">
          <Button
            i="fas fa-trash"
            buttonText="Delete"
            onClickFunc={props.clickDelete}
          />
          <Button
            i="fas fa-edit"
            buttonText="Edit"
            onClickFunc={props.clickEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default Post;
