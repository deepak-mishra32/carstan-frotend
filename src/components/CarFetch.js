import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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

  const [search, setSearch] = useState("");

  return (
    <div style={{ display: "block", margin: "auto" }}>
      <input
        type="text"
        name="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button>
        <Link
          to={{
            pathname: `/product/${search}`,
          }}
        >
          Search
        </Link>
      </button>

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
      ))}
    </div>
  );
}

export default CarFetch;
