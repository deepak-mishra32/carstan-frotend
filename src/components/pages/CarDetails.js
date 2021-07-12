import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import RelatedCars from "../RelatedCars";
import Filter from "../Filter";
import Grid from "@material-ui/core/Grid";
import { BASE_URL, IMG_URL } from "../../utils/Constant";
import "./styles/CarDetails.css";

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
    <Grid container >
      <Grid item sm={12} md={2} lg={2}>
        <div style={{ margin: "16px" }}>
          <Filter />
          <div style={{ margin: "16px" }}>Others</div>
        </div>
      </Grid>
      <Grid item sm={12} md={10} lg={10}>
        {error ? (
          <h3>No Cars Available</h3>
        ) : (
          <Grid container spacing={3} sm={12} md={10} lg={10}>
            <Grid item sm={12} md={6} lg={6}>
              <div>
                <img
                  src={`${IMG_URL}${image}`}
                  alt="Image1"
                  style={{
                    height: "300px",
                    margin: "0px 16px",
                    width: "400px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="thumbnails">
                {cars.image1 ? (
                  <button onClick={() => onClickHandler(cars.image1)}>
                    <img
                      src={`${IMG_URL}${cars.image1}`}
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
                      src={`${IMG_URL}${cars.image2}`}
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
                      src={`${IMG_URL}${cars.image3}`}
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
                      src={`${IMG_URL}${cars.image4}`}
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
            </Grid>
            <Grid item sm={12} md={6} lg={6}>
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
            </Grid>
          </Grid>
        )}
        <Grid item sm={12} md={12} lg={12}>
          <h2>Related Cars</h2>
          <RelatedCars type={cars.car_type} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CarDetails;
