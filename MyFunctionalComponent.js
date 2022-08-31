import React from "react";

function MyComponent(props) {
    const {title } = props;
    return <div>{props.title}</div>
}

export default MyComponent