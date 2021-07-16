import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { IMG_URL } from "../../utils/Constant";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./styles/CarDisplay.css";

function CarsDisplay(props) {
  const cars = props.props;
  return (
    <Container fluid>
      <Row>
        {cars.map((car) => (
          <Col sm={12} md={4} lg={4}>
            <Card className="mb-4" id="class">
              <Card.Img
                className="img"
                src={`${IMG_URL}${car.image1}`}
                title={car.name}
              />
              <Card.Body id="text">
                <Card.Title>
                  {car.company} {car.name}
                </Card.Title>
                <Card.Text>
                  &#8377;
                  {car.price} Lakhs
                </Card.Text>
                <Link
                  id="link"
                  to={{
                    pathname: `/product/${car.name}`,
                  }}
                >
                  <Button size="small" color="primary" id="button">
                    View
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CarsDisplay;
