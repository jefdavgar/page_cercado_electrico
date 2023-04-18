import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import ButtonTwo from "../../Atoms/ButtonTwo/ButtonTwo";
import "./css/FormContact.css";

function FormContact() {
  return (
    <Container className="list">
      <Row className="d-flex justify-content-between">
        <Col
          lg={6}
          xs={12}
          className="title d-flex flex-column align-items-center"
        >
          <h1>TU CERCA</h1>
          <h2>Seguridad Perimetral</h2>
        </Col>
        <Col
          lg={6}
          xs={12}
          className="d-flex justify-content-center align-items-center"
        >
          <Card className="form-container">
            <Card.Body>
              <Form>
                <h1>Bienvenidos</h1>
                <p>Dejanos tus datos aqui para cotizar</p>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Correo</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Mensage</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Escribe tus datos aqui..."
                  />
                </Form.Group>
                <ButtonTwo text={"Enviar"}></ButtonTwo>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default FormContact;
