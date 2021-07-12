import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL, IMG_URL } from "../utils/Constant";
import { Grid } from "@material-ui/core";

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
    <Grid>
      <Grid container spacing={3} sm={12} md={10} lg={10}>
        {relatedCars.map((relatedCar) => (
          <Grid item sm={12} md={3} lg={3}>
            <img
              src={`${IMG_URL}${relatedCar.image1}`}
              alt="Image1"
              style={{
                height: "200px",
                width: "200px",
                margin: "0px 16px",
              }}
            />
            <div style={{ marginBottom: "8px" }}>
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
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default RelatedCars;
