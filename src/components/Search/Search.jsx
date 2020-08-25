import React from "react";
import { Button, Row } from "react-bootstrap";

function Search() {
  return (
    <div className="">
        <h1 className="font-weight-bold text-left">Journey</h1>
      <Row className="mx-5 mt-4">
        <input
          type="text"
          className="form-control col-11"
          aria-describedby="helpId"
          placeholder="Search"
        />
        <Button variant="primary" className="text-white col-1">
          Search
        </Button>
      </Row>
    </div>
  );
}

export default Search;
