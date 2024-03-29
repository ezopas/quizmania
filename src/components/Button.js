import React from 'react';

const Button = (props) => {
    return <button onClick={props.handler()}>{props.name}</button>;
}

export default Button;