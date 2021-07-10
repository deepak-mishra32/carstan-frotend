import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

function CarsDisplay(props) {
  const url = "http://127.0.0.1:8000";
  const cars = props.props;
  return (
    <Grid container spacing={1}>
      <Grid container item sm={12} m={3} lg={10}>
        <div
          style={{
            margin: "16px",
            display: "inline-flex",
            // width: "100%",
          }}
        >
          {cars.map((car) => (
            <div
              key={car.id}
              style={{
                margin: "16px",
                // display: "flex",
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
                  id="link"
                  to={{
                    pathname: `/product/${car.name}`,
                    props: `${car.image1}`,
                  }}
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Grid>
    </Grid>
  );
}

export default CarsDisplay;
