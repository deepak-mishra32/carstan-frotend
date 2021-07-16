import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import RelatedCars from "../RelatedCars";
import Filter from "../Filter";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { BASE_URL, IMG_URL } from "../../utils/Constant";
import "./styles/CarDetails.css";
import Alert from "react-bootstrap/Alert";

function CarDetails() {
  const [cars, setCars] = useState([]);
  const { name } = useParams();
  const [error, setError] = useState("");
  const [image, setImage] = useState();

  const onClickHandler = useCallback((new_image) => {
    setImage(new_image);
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/product/${name}`)
      .then((res) => {
        console.log(res.data);
        setCars(res.data);
        setError("");
        setImage(res.data.image1);
      })
      .catch((err) => {
        setError(err.response.data.Error);
      });
  }, [name]);

  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={2} lg={2}>
          <Filter />
        </Col>
        <Col sm={12} md={10} lg={10}>
          {error ? (
            <h3>No Cars Available</h3>
          ) : (
            <Row>
              <Col sm={12} md={6} lg={6} className="align-items-center">
                <div>
                  <img
                    src={`${IMG_URL}${image}`}
                    alt="Image1"
                    class="img-fluid"
                    id="Detail-img"
                  />
                </div>
                <div className="thumbnails">
                  {cars.image1 ? (
                    <img
                      src={`${IMG_URL}${cars.image1}`}
                      id="img-gallery"
                      alt="Image1"
                      onClick={() => onClickHandler(cars.image1)}
                    />
                  ) : null}
                  {cars.image2 ? (
                    <img
                      src={`${IMG_URL}${cars.image2}`}
                      id="img-gallery"
                      alt="Image2"
                      onClick={() => onClickHandler(cars.image2)}
                    />
                  ) : null}
                  {cars.image3 ? (
                    <img
                      src={`${IMG_URL}${cars.image3}`}
                      id="img-gallery"
                      alt="Image3"
                      onClick={() => onClickHandler(cars.image3)}
                    />
                  ) : null}
                  {cars.image4 ? (
                    <img
                      src={`${IMG_URL}${cars.image4}`}
                      id="img-gallery"
                      alt="Image4"
                      onClick={() => onClickHandler(cars.image4)}
                    />
                  ) : null}
                </div>
              </Col>
              <Col sm={12} md={6} lg={6}>
                <div>
                  <div id="mobile-view-heading">
                    {cars.company} {cars.name}
                  </div>
                  <Alert variant="dark">
                    <h3 id="car-heading">
                      {cars.company} {cars.name}
                    </h3>
                  </Alert>
                  <h5 id="detail">{cars.detail}</h5>
                  <hr />
                  <h4 id="car-subHeading">
                    &#8377;
                    {cars.price} Lakhs only
                  </h4>
                  <h4 id="car-subHeading">Fuel Type- {cars.fuel_type}</h4>
                  <h4 id="car-subHeading">
                    Transmission- {cars.transmission_type}
                  </h4>
                </div>
              </Col>
            </Row>
          )}
          <Row>
            <Col item sm={12} md={12} lg={12}>
              <h2>Related Cars</h2>
              <RelatedCars type={cars.car_type} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default CarDetails;
