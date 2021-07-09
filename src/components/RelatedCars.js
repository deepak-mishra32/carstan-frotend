import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import axios from "axios";

function RelatedCars(props) {
  const [relatedCars, setRelatedCars] = useState([]);
  const url = "http://127.0.0.1:8000";
  useEffect(() => {
    axios
      .get(`${url}/company/${props.company}`)
      .then((res) => {
        console.log(res.data);
        setRelatedCars(res.data);
      })
      .catch((err) => console.log(err));
  }, [props.company]);
  return (
    <div style={{ display: "flex", margin: "auto" }}>
      <Container>
        {relatedCars.map((relatedCar) => (
          <>
            <div
              key={relatedCar.id}
              style={{
                margin: "16px",
                display: "flex",
                width: "50%",
              }}
            >
              <img
                src={`${url}${relatedCar.image1}`}
                alt="Image1"
                style={{
                  height: "200px",
                  width: "200px",
                  margin: "0px 16px",
                }}
              />
              <div style={{ textAlign: "left" }}>
                <h3>
                  {relatedCar.company} {relatedCar.name}
                </h3>
                <h4>
                  &#8377;
                  {relatedCar.price} Lakhs
                </h4>
                <Link
                  to={{
                    pathname: `/product/${relatedCar.name}`,
                  }}
                >
                  View
                </Link>
              </div>
            </div>
          </>
        ))}
      </Container>
    </div>
  );
}

export default RelatedCars;
