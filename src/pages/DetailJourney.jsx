import React, { useState, useEffect } from "react";
import TitleJourney from "../components/detalJourney/TitleJourney";
import { Container } from "react-bootstrap";
import Axios from "axios";
import { useParams } from "react-router-dom";
import Description from "../components/detalJourney/Description";

function DetailJourney() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const result = await Axios({
        method: "GET",
        url: `http://localhost:5000/api/v1/journey/${id}`,
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
    <Container fluid style={{ background: "#E5E5E5", padding: "50px" }}>
      {!data || !data?.user ? (
        <h1>loading</h1>
      ) : (
        <>
          <TitleJourney data={data} />
          <Description data={data} desc={data.description} />
        </>
      )}
    </Container>
  );
}

export default DetailJourney;
