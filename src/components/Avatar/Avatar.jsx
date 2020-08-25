import React, { useState } from "react";
import DefaultAvatar from "../../img/default.png";
import { Row, Col, Image } from "react-bootstrap";
import Axios from "axios";

function Avatar({ data }) {
  const [dataImage, setDataImage] = useState([]);
  const [image, setImage] = useState(data.avatar);

  const changeSelecctedFile = (e) => {
    setDataImage(e.target.files[0]);
  };

  const uploadSelectedFile = () => {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("avatar", dataImage, dataImage.name);
    Axios({
      method: "put",
      url: `http://localhost:5000/api/v1/change-avatar`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: formData,
    })
      .then((response) => {
        setImage(response.data.data.avatar);
        // console.log(formData)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Row className="mt-4">
        <Col className="">
          {image === "default.png" ? (
            <Image src={DefaultAvatar} height="150" roundedCircle />
          ) : (
            <Image src={image} height="150" roundedCircle />
          )}
        </Col>
      </Row>
      <Row className="float-center mt-5 mb-5">
        <input type="file" onChange={changeSelecctedFile} />
        <button
          onClick={uploadSelectedFile}
          className="btn btn-warning btn-sm text-white mt-3"
        >
          Change Image
        </button>
      </Row>
      <Row>
        <Col className="">
          <p>{data.fullname}</p>
          <p>{data.email}</p>
        </Col>
      </Row>
    </div>
  );
}

export default Avatar;
