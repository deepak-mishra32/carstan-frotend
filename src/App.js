import "./App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container fluid className="App">
      <Row>
        <Col sm={12} md={10} lg={10}>
          <h1>Hello! From Carstan</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
