import React from "react";
import { Container, Carousel } from "react-bootstrap";
import FormContact from "../../Molecules/FormContact/FormContact";
import "./css/SectionOne.css";
import img1 from "../../Assets/fondo.jpg"
import img2 from "../../Assets/fondo2.jpg"
import img3 from "../../Assets/fondo3.jpg"
const SectionOne = () => {
  return (
    <section className="d-flex justify-content-center">
        <Carousel>
          <Carousel.Item>
            <img src={img1} alt="imagen de cercado electrico" className="imagen1"/>
          </Carousel.Item>
          <Carousel.Item>
          <img src={img2} alt="imagen de cercado electrico" className="imagen1"/>
          </Carousel.Item>
          <Carousel.Item>
          <img src={img3} alt="imagen de cercado electrico"className="imagen1" />
          </Carousel.Item>
        </Carousel>
        <FormContact></FormContact>
      </section>
  )
}

export default SectionOne