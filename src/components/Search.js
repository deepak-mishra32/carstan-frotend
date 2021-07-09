import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Search() {
  const [search, setSearch] = useState("");
  return (
    <div>
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
    </div>
  );
}

export default Search;
