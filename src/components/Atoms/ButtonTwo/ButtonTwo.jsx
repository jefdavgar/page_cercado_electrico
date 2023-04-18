import React from 'react'
import { Button } from "react-bootstrap";
import "./css/ButtonTwo.css";
const ButtonTwo = ({text}) => {
  return (
    <div className="button-two">
      <div className="text">
        <h6>{text}</h6>
      </div>
    </div>
  )
}

export default ButtonTwo