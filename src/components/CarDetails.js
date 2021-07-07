import React, { useEffect, useState } from "react";
import axios from "axios";
function CarDetails() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/detail/2`)
      .then((res) => {
        console.log(res.data);
        setCars(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [initial_image, setInitial_image] = useState(true);
  const [image, setImage] = useState();
  const onClickHandler = (new_image) => {
    setInitial_image(false);
    setImage(new_image);
  };
  console.log(image);
  console.log(cars.image1);
  console.log(initial_image);
  return (
    <div style={{ display: "block", margin: "auto" }}>
      <>
        <div
          style={{
            margin: "16px",
            display: "flex",
            width: "50%",
          }}
        >
          {initial_image ? (
            <img
              src={`http://127.0.0.1:8000${cars.image1}`}
              alt="Image1"
              style={{ height: "300px", width: "300px", margin: "0px 16px" }}
            />
          ) : (
            <img
              src={`http://127.0.0.1:8000${image}`}
              alt="Image1"
              style={{ height: "300px", width: "300px", margin: "0px 16px" }}
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
            <h4>
              Transmission-
              {cars.transmission_type}
            </h4>
            <h5>
              Description <br /> {cars.detail}
            </h5>
          </div>
        </div>
        <div>
          <button onClick={() => onClickHandler(cars.image1)}>
            <img
              src={`http://127.0.0.1:8000${cars.image1}`}
              alt="Image1"
              style={{ height: "100px", width: "100px", margin: "0px 16px" }}
            />
          </button>
          <button onClick={() => onClickHandler(cars.image2)}>
            <img
              src={`http://127.0.0.1:8000${cars.image2}`}
              alt="Image1"
              style={{ height: "100px", width: "100px", margin: "0px 16px" }}
            />
          </button>
          <button onClick={() => onClickHandler(cars.image3)}>
            <img
              src={`http://127.0.0.1:8000${cars.image3}`}
              alt="Image1"
              style={{ height: "100px", width: "100px", margin: "0px 16px" }}
            />
          </button>
          <button onClick={() => onClickHandler(cars.image4)}>
            <img
              src={`http://127.0.0.1:8000${cars.image4}`}
              alt="Image1"
              style={{ height: "100px", width: "100px", margin: "0px 16px" }}
            />
          </button>
        </div>
      </>
    </div>
  );
}

export default CarDetails;
