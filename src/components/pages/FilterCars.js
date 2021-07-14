import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Filter from "../Filter";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BASE_URL } from "../../utils/Constant";
import CarsDisplay from "./CarsDisplay";

function FilterCars(props) {
  const [cars, setCars] = useState([]);
  const { category, company, transmission, fuel, price } = useParams();
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(
        `${BASE_URL}/filter/${transmission}/${category}/${company}/${price}/${fuel}`
      )
      .then((res) => {
        console.log(res.data);
        setCars(res.data);
        if (cars.length >= 1) {
          setError("");
        } else {
          setError("No Cars Available");
        }
      })
      .catch((err) => {
        setError(err.response.data.Error);
      });
  }, [cars.length, category, company, transmission, fuel, price]);

  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={2} lg={2}>
          <Filter />
        </Col>
        <Col sm={12} md={10} lg={10}>
          {error ? <p>{error}</p> : <CarsDisplay props={cars} />}
        </Col>
      </Row>
    </Container>
  );
}

export default FilterCars;
