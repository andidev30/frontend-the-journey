import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";
import Icon from "../../img/icon.png";
import ModalLogin from "../Modal/ModalLogin";
import ModalRegister from "../Modal/ModalRegister";
import DropdownCustom from "./DropdownCustom";

function Navbar() {
  //modal login
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //modal register
  const [showRegister, setShowRegister] = useState(false);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  return (
    <nav className="navbar navbar-expand navbar-dark bg-transparant">
      <img src={Icon} alt="icon" />
      <div className="nav navbar-nav ml-auto">
        {localStorage.getItem("token") ? (
          <DropdownCustom />
        ) : (
          <Col>
            <Button
              variant="outline-light"
              className="mr-2"
              onClick={handleShow}
            >
              Login
            </Button>
            <Button
              variant="warning"
              className="text-white"
              onClick={handleShowRegister}
            >
              Register
            </Button>
          </Col>
        )}
      </div>
      {show && <ModalLogin show={show} handleClose={handleClose} />}
      {showRegister && (
        <ModalRegister show={showRegister} handleClose={handleCloseRegister} />
      )}
    </nav>
  );
}

export default Navbar;
