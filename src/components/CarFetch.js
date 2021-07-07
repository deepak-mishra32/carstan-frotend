import React, { useEffect, useState } from "react";
import axios from "axios";
function CarFetch() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/cars/`)
      .then((res) => {
        console.log(res.data);
        setCars(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [image, setImage] = useState();
  const onClickHandler = (image) => {
    setImage(image);
  };
  return (
    <div style={{ display: "block", margin: "auto" }}>
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
              src={`http://127.0.0.1:8000${car.image1}`}
              alt="Image1"
              style={{ height: "300px", width: "300px", margin: "0px 16px" }}
            />
            <div style={{ textAlign: "left" }}>
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
              <h5>
                Description <br /> {car.detail}
              </h5>
            </div>
          </div>
          <div>
            <button onClick={() => onClickHandler(car.image2)}>
              <img
                src={`http://127.0.0.1:8000${car.image2}`}
                alt="Image1"
                style={{ height: "100px", width: "100px", margin: "0px 16px" }}
              />
            </button>
            <img
              src={`http://127.0.0.1:8000${car.image3}`}
              alt="Image1"
              style={{ height: "100px", width: "100px", margin: "0px 16px" }}
            />
            <img
              src={`http://127.0.0.1:8000${car.image4}`}
              alt="Image1"
              style={{ height: "100px", width: "100px", margin: "0px 16px" }}
            />
          </div>
        </>
      ))}
    </div>
  );
}

export default CarFetch;
