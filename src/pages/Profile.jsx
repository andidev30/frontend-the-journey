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

  return (
    <Container fluid style={{ background: "#E5E5E5", padding: "50px" }}>
      <h2>Profile</h2>
      {!data ? <h1>loading ...</h1> : <Avatar data={data} />}
      <Row>
        {/* <CardJourney /> */}
      </Row>
    </Container>
  );
}

export default Profile;
