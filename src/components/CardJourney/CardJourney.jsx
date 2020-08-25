import React from "react";
import { Card } from "react-bootstrap";
import {Link} from 'react-router-dom'
import Axios from 'axios'

function CardJourney({ data }) {
  const addBookmark = (e) => {
    const token = localStorage.getItem('token')
      const id = e.target.getAttribute('id')
      // console.log('tes')
      
      Axios({
        method: "post",
        url: "http://localhost:5000/api/v1/bookmark",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          journeyId : id
        }
      }).then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })
  }
  return (
    <Card style={{ width: "18rem", marginRigh:"0px" }}>
      <Card.Img variant="top" src={data.image} />
      <span className="text-muted">20 agustus 2020</span>
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        {/* <Button variant="primary">more</Button> */}
        <Link to={`/journey/${data.id}`}>
          more
        </Link>
        <hr/>
        <button className="btn btn-transparant" onClick={(e) => addBookmark(e)} id={data.id}>bookmark</button>
      </Card.Body>
    </Card>
  );
}

export default CardJourney;
