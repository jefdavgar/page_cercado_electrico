import React from "react";
import { Row, Col } from "react-bootstrap";
import "./css/SectionTwo.css";
import Preview_1 from "../../../assets/preview_1.jpg";
import ButtonOne from "../../Atoms/ButtonOne/ButtonOne";
import Triangle from "../../Assets/Triangle.png"
const SectionTwo = () => {
  return (
    <section className="section_two">
        <Row className="justify-content-end" style={{ margin:"40px 0px"}}>
          <Col lg={4} xs={12} className="about-section" style={{height: "42vw"}}>
            <Row className="justify-content-end">
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
          <Col lg={6} xs={12} className="preview-img">
            <img src={Preview_1} alt="Preview"/>
          </Col>
        </Row>
      </section>
  )
}

export default SectionTwo