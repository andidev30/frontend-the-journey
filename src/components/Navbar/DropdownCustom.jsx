import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";

function DropdownCustom() {
  const email = localStorage.getItem("email");

  const handleLogout = () => {
    localStorage.setItem('token', '')
    localStorage.setItem('email', '')
    window.location.reload(false);
  }

  return (
    <>
      <DropdownButton
        id="dropdown-item-button"
        variant="transparant"
        title={email}
      >
        <Dropdown.ItemText>
          <Link to="/profile">Profile</Link>
        </Dropdown.ItemText>
        <Dropdown.ItemText>
          <Link to="/add-journey">new journey</Link>
        </Dropdown.ItemText>
        <Dropdown.ItemText>
          <Link to="/bookmark">Bookmark</Link>
        </Dropdown.ItemText>
        <Dropdown.Divider />
        <Dropdown.Item onClick={handleLogout}>
          Logout
        </Dropdown.Item>
      </DropdownButton>
    </>
  );
}

export default DropdownCustom;
