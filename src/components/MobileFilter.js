import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Filter from "./Filter";
import Button from "react-bootstrap/Button";
import { BiFilter } from "react-icons/bi";

function MobileFilter() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow} id="mobile-link-filter">
        Filters
        <BiFilter id="filter-icon" />
      </Button>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Choose Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body id="filter-dialouge">
          <Filter />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MobileFilter;
