import React from "react";
import { Button } from "react-bootstrap";
import "./css/ButtonOne.css";
const ButtonOne = ({ text, img }) => {
  return (
    <Button className="button-one">
      <img src={img} alt="My Image" className="image" />
      <div className="text">
        <p>{text}</p>
      </div>
    </Button>
  );
};

export default ButtonOne;
