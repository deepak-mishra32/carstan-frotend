import React, { useEffect, useState } from "react";
import axios from "axios";
function CarFetch() {
  const [cars, setCars] = useState([]);
  //   const [id, setId] = useState(1);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/cars/`)
      .then((res) => {
        console.log(res.data);
        setCars(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div style={{ display: "block", margin: "auto" }}>
      {cars.map((car) => (
        <div
          key={car.id}
          style={{
            margin: "16px",
            display: "flex",
          }}
        >
          <img
            src={`http://127.0.0.1:8000${car.image1}`}
            alt="Image1"
            style={{ height: "200px", width: "200px", margin: "0px 16px" }}
          />
          <div>
            <h3>
              {car.car_type}-{car.company} {car.name}
            </h3>
            <h4>
              &#8377;
              {car.price} Lakhs
            </h4>
            <h4>
              Transmission-
              {car.transmission_type}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CarFetch;
