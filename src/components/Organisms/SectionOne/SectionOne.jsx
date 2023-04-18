import React from "react";
import { Container, Carousel } from "react-bootstrap";
import FormContact from "../../Molecules/FormContact/FormContact";
import "./css/SectionOne.css";
const SectionOne = () => {
  return (
    <section className="d-flex justify-content-center">
        <Carousel>
          <Carousel.Item>
            <img src="" alt="" />
            <div className="imagen"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="imagen2"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="imagen3"></div>
          </Carousel.Item>
        </Carousel>
        <FormContact></FormContact>
      </section>
  )
}

export default SectionOne