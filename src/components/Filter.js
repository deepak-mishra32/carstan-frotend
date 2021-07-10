import { Link } from "react-router-dom";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "../components/pages/styles/Filter.css";

function Filter() {
  const [company, setCompany] = useState("Maruti");
  const [category, setCategory] = useState("Hatchback");
  const [transmission, setTransmission] = useState("Manual");
  const [price, setPrice] = useState("6");
  const [fuel, setFuel] = useState("Petrol");

  const onClickHandle = () => {
    console.log(company, category, transmission, price, fuel);
  };

  return (
    <div>
      <div>
        <select
          name="Company"
          value={company}
          // defaultValue="Tata"
          id="option-div"
          onChange={(e) => setCompany(e.target.value)}
          id="option-div"
        >
          <option value="Company">Company</option>
          <option value="Tata">Tata</option>
          <option value="Maruti">Maruti</option>
          <option value="Hyundai">Hyundai</option>
          <option value="Skoda">Skoda</option>
          <option value="Volkswagen">Volkswagen</option>
        </select>
      </div>
      <div>
        <select
          name="Category"
          value={category}
          // defaultValue="Hatchback"
          onChange={(e) => setCategory(e.target.value)}
          id="option-div"
        >
          <option value="Category">Category</option>
          <option value="Hatchback">Hatchback</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Luxury">Luxury</option>
        </select>
      </div>
      <div>
        <select
          name="Transmission"
          value={transmission}
          // defaultValue="Automatic"
          onChange={(e) => setTransmission(e.target.value)}
          id="option-div"
        >
          <option value="Transmission">Transmission</option>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>
      </div>
      <div>
        <select
          name="price"
          value={price}
          // defaultValue="40"
          onChange={(e) => setPrice(e.target.value)}
          id="option-div"
        >
          <option value="Price">&#8377; Price</option>
          <option value="3">&#8377; 1 Lakhs-3 Lakhs</option>
          <option value="6">&#8377; 3 Lakhs-6 Lakhs</option>
          <option value="10">&#8377; 6 Lakhs-10 Lakhs</option>
          <option value="20">&#8377; 10 Lakhs-20 Lakhs</option>
          <option value="40">&#8377; 20 Lakhs-40 Lakhs</option>
          <option value="100">&#8377; 40 Lakhs-1 Crore</option>
        </select>
      </div>
      <div>
        <select
          name="fuel"
          value={fuel}
          // defaultValue="Petrol"
          onChange={(e) => setFuel(e.target.value)}
          id="option-div"
        >
          <option value="Fuel">Fuel</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="CNG">CNG</option>
        </select>
      </div>
      <Link
        to={{
          pathname: `/filter/${transmission}/${category}/${company}/${price}/${fuel}`,
        }}
        id="link"
      >
        <Button onClick={onClickHandle} className="root">
          Apply Filter
        </Button>
      </Link>
    </div>
  );
}

export default Filter;
