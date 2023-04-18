import React from "react";
import { Row, Col } from "react-bootstrap";
import "./css/SectionFour.css";
import Preview_1 from "../../../assets/preview_1.jpg";
import ButtonOne from "../../Atoms/ButtonOne/ButtonOne";
import Triangle from "../../Assets/Triangle.png"
const SectionFour = () => {
  return (
    <div
        className="d-flex justify-content-end"
        style={{
          marginTop: "1640px",
          position: "absolute",
          background: "white",
          width:"100vw",
          paddingTop:"30px"
        }}
      >
        <Row className="justify-content-end" style={{ margin:"40px 0px"}}>
          <Col lg={6} xs={12} className="preview-img">
            <img src={Preview_1} alt="Preview"/>
          </Col>
          <Col lg={4} xs={12}  style={{height: "42vw"}}>
            <Row>
              <Col lg={12}>
                <h1>Nosotros</h1>
              </Col>
              <Col lg={12}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                  est. Adipisci sequi totam porro. Fuga rerum praesentium voluptate
                  iste officiis, assumenda sequi rem expedita mollitia tenetur amet
                  recusandae suscipit ipsum?
                  Adipisci sequi totam porro. Fuga rerum praesentium voluptate
                  iste officiis, assumenda sequi rem expedita mollitia tenetur amet
                  recusandae suscipit ipsum
                  Adipisci sequi totam porro. Fuga rerum praesentium voluptate
                  iste officiis, assumenda sequi rem expedita mollitia tenetur amet
                  recusandae suscipit ipsum
                  Adipisci sequi totam porro. Fuga rerum praesentium voluptate
                  iste officiis, assumenda sequi rem expedita mollitia tenetur amet
                  recusandae suscipit ipsum
                </p>
              </Col>
              <Col lg={4}>
                <ButtonOne text={"Leer mas"} img={Triangle}/>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
  );
};

export default SectionFour;
