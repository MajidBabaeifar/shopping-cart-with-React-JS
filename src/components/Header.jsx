import React, { useContext } from "react";
import { RiShoppingCartFill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import { Button } from "react-bootstrap";
import {
  Container,
  Dropdown,
  FormControl,
  Navbar,
  Badge,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { Cart } from "./context";

const Header = () => {
  const { cart, setCart } = useContext(Cart);
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        style={{
          height: 80,
          position: "fixed",
          zIndex: +2,
          width: "100%",
          top: 0,
        }}
      >
        <Container className="d-flex justify-content-evenly">
          <Navbar.Brand>
            <Link
              className="text-decoration-none"
              to="/"
              style={{ color: "inherit" }}
            >
              Shopping Cart
            </Link>
          </Navbar.Brand>

          <NavLink to="/">Home</NavLink>
          <NavLink to="/cartpage">Link</NavLink>

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
              <Badge className="m-1" bg="primary">
                {cart.length}
              </Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ right: 0 }}>
              {cart.length === 0 ? (
                <Dropdown.Item>cart is empty!</Dropdown.Item>
              ) : (
                cart.map((item) => (
                  <Dropdown.Item key={item.id}>
                    <div>
                      <div>{item.name}</div>
                      <Button
                        onClick={(e) =>
                          setCart(cart.filter(e.target.id !== item.id))
                        }
                        variant="dark"
                        style={{ borderRadius: "50%" }}
                      >
                        <MdDeleteForever style={{ fontSize: "1.2rem" }} />
                      </Button>
                    </div>
                  </Dropdown.Item>
                ))
              )}
            </Dropdown.Menu>
          </Dropdown>
          {/* </Nav> */}
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
