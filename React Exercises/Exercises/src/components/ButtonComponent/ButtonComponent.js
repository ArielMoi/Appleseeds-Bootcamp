import React from 'react';

// const ButtonComponent = (props) => {
//     return <button>{props.children}</button>
// }

class ButtonComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return <button>{this.props.content}</button>;
    }
}

export default ButtonComponent;