import PageContainer from "./PageContainer";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Homepage(props) {
  return (
    <PageContainer colorMode={props.colorMode}>
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
    </PageContainer>
  );
}

export default Homepage;