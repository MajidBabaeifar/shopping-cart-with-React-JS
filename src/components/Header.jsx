import React from "react";
import { RiShoppingCartFill } from "react-icons/ri";
import { Container, Dropdown, FormControl, Navbar, Nav, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
        <Container className="d-flex justify-content-evenly" >
          <Navbar.Brand>
            <Link
              className="text-decoration-none"
              to="/"
              style={{ color: "inherit" }}
            >
              Shopping Cart
            </Link>
          </Navbar.Brand>
          <Navbar.Text>
            <FormControl
              style={{ width: "40vw" }}
              type="search"
              placeholder="Search a product..."
              className="m-auto"
              aria-label="Search"
            />
          </Navbar.Text>
          {/* <Nav> */}
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <RiShoppingCartFill />
              <Badge className="m-1" bg="primary">9</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{right:0}}>
              <Dropdown.Item href="#/action-1">cart is empty!</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* </Nav> */}
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
