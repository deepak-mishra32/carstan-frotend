import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";

function CarFetch() {
  const [cars, setCars] = useState([]);
  const url = "http://127.0.0.1:8000";
  useEffect(() => {
    axios
      .get(`${url}/cars/`)
      .then((res) => {
        console.log(res.data);
        setCars(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <div style={{ display: "block", margin: "auto", position: "relative" }}>
        {cars.map((car) => (
          <>
            <div
              key={car.id}
              style={{
                margin: "16px",
                display: "flex",
                width: "50%",
              }}
            >
              <img
                src={`${url}${car.image1}`}
                alt="Image1"
                style={{
                  height: "200px",
                  width: "200px",
                  margin: "0px 16px",
                }}
              />
              <div style={{ textAlign: "left" }}>
                <h3>
                  {car.company} {car.name}
                </h3>
                <h4>
                  &#8377;
                  {car.price} Lakhs
                </h4>
                <Link
                  to={{
                    pathname: `/product/${car.name}`,
                    props: `${car.image1}`,
                  }}
                >
                  View
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>
    </Container>
  );
}

export default CarFetch;
