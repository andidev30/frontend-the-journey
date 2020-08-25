import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Axios from "axios";

function ModalRegister({ show, handleClose }) {
  const [registerForm, setRegisterForm] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const [errorForm, setErrorForm] = useState("");

  const changeRegisterForm = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  const submitRegisterForm = (e) => {
    e.preventDefault();

    Axios({
      method: "post",
      url: "http://localhost:5000/api/v1/register",
      data: { ...registerForm },
    })
      .then((response) => {
        const data = response.data.data;
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.email);
        handleClose(false);
        window.location.reload(false);
      })
      .catch((error) => {
        setErrorForm(error.response.data.error.message);
      });
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errorForm && (
            <div className="my-3 alert alert-danger text-center">
              {errorForm}
            </div>
          )}
          <Form onSubmit={(e) => submitRegisterForm(e)}>
            <Form.Group controlId="formBasicName">
              <Form.Label className="m-title">Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Full Name"
                value={registerForm.fullname}
                name="fullname"
                onChange={(e) => {
                  changeRegisterForm(e);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className="mt-4">
              <Form.Label className="m-title">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={registerForm.email}
                name="email"
                onChange={(e) => {
                  changeRegisterForm(e);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-4">
              <Form.Label className="m-title">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={registerForm.password}
                name="password"
                onChange={(e) => {
                  changeRegisterForm(e);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPhone" className="mt-4">
              <Form.Label className="m-title">Phone</Form.Label>
              <Form.Control
                type="number"
                placeholder="Phone"
                value={registerForm.phone}
                name="phone"
                onChange={(e) => {
                  changeRegisterForm(e);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicAddress" className="mt-4">
              <Form.Label className="m-title">Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                value={registerForm.address}
                name="address"
                onChange={(e) => {
                  changeRegisterForm(e);
                }}
              />
            </Form.Group>
            <Button
              variant="warning"
              className="btn btn-block text-white font-weight-bold mt-4"
              type="submit"
              disabled={registerForm.address === "" ? true : false}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalRegister;
