import React from "react";
import { Row, Col } from "react-bootstrap";
import "./css/SectionThree.css";
import Cash from "../../../assets/Component 1.png";
import Cash2 from "../../../assets/Component 2.png";
import Cash3 from "../../../assets/Component 3.png";
import Cash4 from "../../../assets/Component 4.png";
const SectionThree = () => {
  return (
    <div
        className="d-flex flex-column align-items-center"
        style={{
          marginTop: "1360px",
          position: "absolute",
          background: "white",
          width:"100vw"
        }}
      >
        <h1>¿Porque elejirnos?</h1>
        <br />
        <Row className="justify-content-center">
          <Col lg={3} sm={12} className="d-flex flex-column align-items-center justify-content-center">
            <img src={Cash4} alt="Seguridad" />
            <h6>Seguridad</h6>
          </Col>
          <Col lg={3} sm={12} className="d-flex flex-column align-items-center justify-content-center">
            <img src={Cash3} alt="Confiable" />
            <h6>Confiable</h6>
          </Col>
          <Col lg={3} sm={12} className="d-flex flex-column align-items-center justify-content-center">
            <img src={Cash2} alt="Garantia" />
            <h6>Garantia</h6>
          </Col>
          <Col lg={3} sm={12} className="d-flex flex-column align-items-center justify-content-center">
            <img src={Cash} alt="Economia" />
            <h6>Economia</h6>
          </Col>
        </Row>
      </div>
  )
}

export default SectionThree