import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Search from "../components/Search/Search";
import CardJourney from "../components/CardJourney/CardJourney";
import Axios from "axios";

function Home() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const result = await Axios({
        method: "GET",
        url: "http://localhost:5000/api/v1/journeys",
      });

      setData(result.data.data);
      console.log(result.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container fluid style={{ background: "#E5E5E5", padding: "80px" }}>
        <h1 className="font-weight-bold text-left">Journey</h1>
        <Search />
        <Row className="mt-4">
          {!data ? (
            <h1>loading</h1>
          ) : (
            data.map((td) => <CardJourney key={td.id} data={td} />)
          )}
        </Row>
      </Container>
    </>
  );
}

export default Home;
