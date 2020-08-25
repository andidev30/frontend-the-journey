import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Axios from "axios";

function ModalLogin({ show, handleClose }) {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [errorForm, setErrorForm] = useState();

  const changeFormLogin = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const submitLoginForm = (e) => {
    e.preventDefault();

    Axios({
      method: "post",
      url: "http://localhost:5000/api/v1/login",
      data: { ...loginForm },
    })
      .then(function (response) {
        const data = response.data.data;
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.email);
        handleClose(false);
        window.location.reload(false);
      })
      .catch(function (error) {
        setErrorForm(error.response.data.error.message);
      });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errorForm && (
            <div className="my-3 alert alert-danger text-center">
              {errorForm}
            </div>
          )}
          <form onSubmit={(e) => submitLoginForm(e)}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Email"
                value={loginForm.email}
                onChange={(e) => changeFormLogin(e)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Password"
                value={loginForm.password}
                onChange={(e) => changeFormLogin(e)}
              />
            </div>
            <div>
              <Button className="btn btn-primary btn-block" type="submit">Login</Button>
              <p className="text-muted">Don't have an account click here</p>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalLogin;
