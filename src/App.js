import "./App.css";
import Filter from "./components/Filter";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container fluid className="App">
      <Row>
        <Col sm={12} md={3} lg={3}>
          <div>
            <Filter />
          </div>
        </Col>
        <Col sm={12} m={9} lg={9}>
          <h1>Hello! From Carstan</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
