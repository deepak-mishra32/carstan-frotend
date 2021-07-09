import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";
import RelatedCars from "../RelatedCars";
function CarDetails() {
  const [cars, setCars] = useState([]);
  const { name } = useParams();
  const [error, setError] = useState("");

  const url = "http://127.0.0.1:8000";
  useEffect(() => {
    axios
      .get(`${url}/product/${name}`)
      .then((res) => {
        console.log(res.data);
        setCars(res.data);
        setError("");
      })
      .catch((err) => {
        setError(err.response.data.Error);
      });
  }, [name]);

  const [initial_image, setInitial_image] = useState(true);
  const [image, setImage] = useState();

  const onClickHandler = (new_image) => {
    setInitial_image(false);
    setImage(new_image);
  };
  return (
    <>
      <Container>
        {error ? (
          <p>{error}</p>
        ) : (
          <div style={{ display: "block", margin: "auto" }}>
            <div
              style={{
                margin: "16px",
                display: "flex",
                // width: "60%",
              }}
            >
              {initial_image ? (
                <img
                  src={`${url}${cars.image1}`}
                  alt="Image1"
                  style={{
                    height: "300px",
                    width: "400px",
                    margin: "0px 16px",
                  }}
                />
              ) : (
                <img
                  src={`${url}${image}`}
                  alt="Image1"
                  style={{
                    height: "300px",
                    width: "400px",
                    margin: "0px 16px",
                  }}
                />
              )}

              <div style={{ textAlign: "left" }}>
                <h3>
                  {cars.car_type}-{cars.company} {cars.name}
                </h3>
                <h4>
                  &#8377;
                  {cars.price} Lakhs
                </h4>
                <h4>Fuel Type- {cars.fuel_type}</h4>
                <h4>Transmission- {cars.transmission_type}</h4>
                <h5>
                  Description <br /> {cars.detail}
                </h5>
              </div>
            </div>
            {/* <div style={{ width: "60%" }}> */}
            <div>
              {cars.image1 ? (
                <button onClick={() => onClickHandler(cars.image1)}>
                  <img
                    src={`${url}${cars.image1}`}
                    alt="Image1"
                    style={{
                      height: "100px",
                      width: "100px",
                      margin: "0px 16px",
                    }}
                  />
                </button>
              ) : null}
              {cars.image2 ? (
                <button onClick={() => onClickHandler(cars.image2)}>
                  <img
                    src={`${url}${cars.image2}`}
                    alt="Image2"
                    style={{
                      height: "100px",
                      width: "100px",
                      margin: "0px 16px",
                    }}
                  />
                </button>
              ) : null}
              {cars.image3 ? (
                <button onClick={() => onClickHandler(cars.image3)}>
                  <img
                    src={`${url}${cars.image3}`}
                    alt="Image3"
                    style={{
                      height: "100px",
                      width: "100px",
                      margin: "0px 16px",
                    }}
                  />
                </button>
              ) : null}
              {cars.image4 ? (
                <button onClick={() => onClickHandler(cars.image4)}>
                  <img
                    src={`${url}${cars.image4}`}
                    alt="Image4"
                    style={{
                      height: "100px",
                      width: "100px",
                      margin: "0px 16px",
                    }}
                  />
                </button>
              ) : null}
            </div>
          </div>
        )}
        <div>
          <RelatedCars company={cars.company} />
        </div>
      </Container>
    </>
  );
}

export default CarDetails;
