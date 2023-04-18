import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../../assets/logo.png"
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./css/Menu.css"

const Menu = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState('#inicio');

  const handleInicio = (event) => {
    setActive("#inicio");
    setShow(false);
  };
  const handleNosotros = (event) => {
    setActive("#nosotros");
    setShow(false);
  };
  const handleCotizacion = (event) => {
    setActive("#cotizacion");
    setShow(false);
  };
  const handleGaleria = (event) => {
    setActive("#galeria");
    setShow(false);
  };
  const handleContactanos = (event) => {
    setActive("#contactanos");
    setShow(false);
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark" fixed="top" style={{marginBottom: "20px"}}>
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} alt="Logo cercas electricas" className='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setShow(true)} />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end' >
          <Nav className="nav_desktop me-left">
          <Nav.Link href="#inicio" onClick={(handleInicio)} className={active === '#inicio' ? 'active' : ''}>Inicio</Nav.Link>
            <Nav.Link href="#nosotros" onClick={(handleNosotros)} className={active === '#nosotros' ? 'active' : ''}>Nosotros</Nav.Link>
            <Nav.Link href="#cotizacion" onClick={(handleCotizacion)} className={active === '#cotizacion' ? 'active' : ''} >Cotización</Nav.Link>
            <Nav.Link href="#galeria" onClick={(handleGaleria)} className={active === '#galeria' ? 'active' : ''}>Galeria</Nav.Link>
            <Nav.Link href="#contactanos" onClick={(handleContactanos)} className={active === '#contactanos' ? 'active' : ''} >Contactanos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Offcanvas show={show} onHide={() => setShow(false)} placement='end' className='offcanvas' animation='menu-animation'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><img src={Logo} alt="Logo cercas electricas" className='logo'/></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav className="flex-column">
            <Nav.Link href="#inicio" onClick={(handleInicio)} className={active === '#inicio' ? 'active_responsive' : ''}>Inicio</Nav.Link>
            <Nav.Link href="#nosotros" onClick={(handleNosotros)} className={active === '#nosotros' ? 'active_responsive' : ''}>Nosotros</Nav.Link>
            <Nav.Link href="#cotizacion" onClick={(handleCotizacion)} className={active === '#cotizacion' ? 'active_responsive' : ''} >Cotización</Nav.Link>
            <Nav.Link href="#galeria" onClick={(handleGaleria)} className={active === '#galeria' ? 'active_responsive' : ''}>Galeria</Nav.Link>
            <Nav.Link href="#contactanos" onClick={(handleContactanos)} className={active === '#contactanos' ? 'active_responsive' : ''} >Contactanos</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  )
}

export default Menu
