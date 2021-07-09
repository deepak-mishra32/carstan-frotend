import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search";

function Navbar() {
  return (
    <div style={{ display: "inline-flex" }}>
      <Link to="/">Home</Link> <br />
      <Link to="/cars">All Cars</Link>
      <Search />
    </div>
  );
}

export default Navbar;
