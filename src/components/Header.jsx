import React from "react";
import { RiShoppingCartFill } from "react-icons/ri";
import { Container, Dropdown, FormControl, Navbar, Nav, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
        <Container>
          <Navbar.Brand>
            <Link
              className="text-decoration-none"
              to="/"
              style={{ color: "white" }}
            >
              Shopping Cart
            </Link>
          </Navbar.Brand>
          <Navbar.Text>
            <FormControl
              style={{ width: 500 }}
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
              <Badge bg="secondary">9</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* </Nav> */}
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
