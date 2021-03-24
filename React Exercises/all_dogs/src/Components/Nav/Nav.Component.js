import './Nav.css';
import Button from '../Button/Button.Component'

function Nav(props){
    return (
      <div className="navigator">
        <h1>{props.main}</h1>
        
      </div>
    );
}

export default Nav;