import React from "react";
import { Container } from "react-bootstrap";
import AddJourney from "../components/AddJourney/AddJourney";

function NewJourney() {
  return (
    <Container fluid style={{ background: "#E5E5E5", padding: "50px" }}>
      <h1>New Journey</h1>
      <AddJourney />
    </Container>
  );
}

export default NewJourney;
