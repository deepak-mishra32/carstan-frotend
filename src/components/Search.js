import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "./Search.css";

function Search() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Car Name"
          className="mr-2"
          id="search-input"
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link
          id="link"
          to={{
            pathname: `/product/${search}`,
          }}
        >
          <Button id="search-btn" type="reset">
            Search
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Search;
