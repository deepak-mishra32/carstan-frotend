import React, { useEffect, useState } from "react";
import axios from "axios";
import Filter from "../Filter";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import CarsDisplay from "./CarsDisplay";
import { BASE_URL, PAGE_SIZE } from "../../utils/Constant";
import "./styles/Filter.css";

function CarFetch() {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * PAGE_SIZE;

  const loadHandler = () => {
    setCurrentPage((prevState) => prevState + 1);
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/cars/`)
      .then((res) => {
        console.log(res.data);
        setCars(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={2} lg={2}>
          <div>
            <Filter />
          </div>
        </Col>
        <Col sm={12} md={10} lg={10}>
          <CarsDisplay props={cars.slice(0, lastIndex)} />
          {lastIndex <= cars.length && (
            <button className="root" onClick={loadHandler}>
              Load More
            </button>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default CarFetch;
