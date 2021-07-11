import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { IMG_URL } from "../../utils/Constant";

function CarsDisplay(props) {
  const cars = props.props;
  return (
    <Grid container>
      {cars.map((car) => (
        <Grid item sm={12} m={4} lg={4}>
          <img
            src={`${IMG_URL}${car.image1}`}
            alt="Image1"
            style={{
              height: "200px",
              width: "200px",
              margin: "0px 16px",
            }}
          />
          <div style={{ marginBottom: "8px" }}>
            <h3>
              {car.company} {car.name}
            </h3>
            <h4>
              &#8377;
              {car.price} Lakhs
            </h4>
            <Link
              id="link"
              to={{
                pathname: `/product/${car.name}`,
              }}
            >
              View
            </Link>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

export default CarsDisplay;
