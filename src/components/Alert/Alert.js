import React from "react";
import "./Alert.css";

const Alert = props => (
  <div className="default" style={props.style}>
    {props.message ? <p>{props.message}</p> : <p> Click an image to begin!</p>}
  </div>
);

export default Alert;
