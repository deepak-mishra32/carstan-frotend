import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function FilterCars() {
  const [cars, setCars] = useState([]);
  const { transmission, category, company, price, fuel } = useParams();
  const [error, setError] = useState("");

  const url = "http://127.0.0.1:8000";
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/filter/manual/sedan/maruti/27/petrol")
      // .get(`${url}/filter${transmission}${category}${company}${price}${fuel}`)
      .then((res) => {
        console.log(res.data);
        setCars(res.data);
        if (cars.length >= 1) {
          setError("");
        } else {
          setError("No Cars Available");
        }
      })
      .catch((err) => {
        setError(err.response.data.Error);
      });
  }, [cars.length]);

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        cars.map((car) => (
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
                  to={{
                    pathname: `/product/${car.name}`,
                  }}
                >
                  View
                </Link>
              </div>
            </div>
          </>
        ))
      )}
    </>
  );
}

export default FilterCars;
