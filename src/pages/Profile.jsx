import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import CardJourney from "../components/CardJourney/CardJourney";
import Axios from "axios";
import Avatar from "../components/Avatar/Avatar";

function Profile() {
  const [data, setData] = useState();

  const getData = () => {
    const token = localStorage.getItem("token");
    Axios({
      method: "get",
      url: "http://localhost:5000/api/v1/user",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  // localhost:5000/api/v1/journey-by-user
  const [dataJourney, setDataJourney] = useState();

  const getDataJourney = () => {
    const token = localStorage.getItem("token");
    Axios({
      method: "get",
      url: "http://localhost:5000/api/v1/journey-by-user",
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
    <Container fluid style={{ background: "#E5E5E5", padding: "80px" }}>
      <h2 className="font-weight-bold">Profile</h2>
      {!data ? <h1>loading ...</h1> : <Avatar data={data} />}
      <h5>My Journey</h5>
      <Row>
        {!dataJourney ? (
          <h1>loading ...</h1>
        ) : (
          dataJourney.map((td) => <CardJourney key={td.id} data={td} />)
        )}
      </Row>
    </Container>
  );
}

export default Profile;
