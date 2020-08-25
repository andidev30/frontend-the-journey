import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import CardJourney from "../components/CardJourney/CardJourney";
import Axios from "axios";

function Bookmark() {
  const [dataJourney, setDataJourney] = useState();

  const getDataJourney = () => {
    const token = localStorage.getItem("token");
    Axios({
      method: "get",
      url: "http://localhost:5000/api/v1/bookmark-by-user",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setDataJourney(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getDataJourney();
  }, []);
  return (
    <Container fluid style={{ background: "#E5E5E5", padding: "50px" }}>
      <h2>Bookmark</h2>
      <Row>
        {!dataJourney ? (
          <h1>loading ...</h1>
        ) : (
          dataJourney.map((td) => <CardJourney key={td.id} data={td.journey} />)
        )}
      </Row>
    </Container>
  );
}

export default Bookmark;
