import React from "react";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import Menu from "../Molecules/Menu/Menu";
import "./css/Index.css";
import SectionOne from "../Organisms/SectionOne/SectionOne";
import SectionTwo from "../Organisms/SectionTwo/SectionTwo";
import SectionThree from "../Organisms/SectionThree/SectionThree";
import SectionFour from "../Organisms/SectionFour/SectionFour";
const Index = () => {
  return (
    <>
      <Menu></Menu>
      <SectionOne/>
      <SectionTwo/>
    </>
  );
};

export default Index;
