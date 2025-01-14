import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Homepage(props) {
  return (
    <Container bg={props.colorMode} data-bs-theme={props.colorMode}>
      <Row>
        <Col>Column 1</Col>
        <Col>Column 2</Col>
        <Col>Column 3</Col>
      </Row>
      <Row>
        <Col>Column 1</Col>
        <Col>Column 2</Col>
        <Col>Column 3</Col>
      </Row>
    </Container>
  );
}

export default Homepage;