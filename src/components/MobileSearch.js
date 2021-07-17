import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { Accordion } from "react-bootstrap";
import Search from "./Search";

function MobileSearch() {
  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <BiSearchAlt />
            search
          </Accordion.Header>
          <Accordion.Body>
            <Search />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default MobileSearch;
