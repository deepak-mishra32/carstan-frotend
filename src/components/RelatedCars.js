import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL, IMG_URL } from "../utils/Constant";

function RelatedCars(props) {
  const [relatedCars, setRelatedCars] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/category/${props.type}`)
      .then((res) => {
        console.log(res.data);
        setRelatedCars(res.data);
      })
      .catch((err) => console.log(err));
  }, [props.type]);
  return (
    <Container maxWidth="lg">
      <div style={{ display: "flex", margin: "auto" }}>
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
                src={`${IMG_URL}${relatedCar.image1}`}
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
                    props: `${relatedCar.image1}`,
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

export default RelatedCars;
