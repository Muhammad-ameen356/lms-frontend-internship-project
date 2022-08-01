import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BiLogIn, BiSearch } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import "../../App.scss";
import style from "./Navbar.module.scss";

const NavbarComponent = () => {
  const history = useNavigate();

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      className={style.mainContainer}
    >
      <Container>
        <Navbar.Brand href="#home">
          <span className={style.lms}>LMS</span>
          <span className={style.edu}>edu</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ backgroundColor: "white !important" }}
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ backgroundColor: "white !important" }}
        >
          <Nav className={`me-auto ${style.navContainer}`}>
            <Nav.Link href="#features" className={style.padding}>
              Home
            </Nav.Link>
            <Nav.Link href="#pricing" className={style.padding}>
              Courses
            </Nav.Link>
            <Nav.Link href="#pricing" className={style.padding}>
              Pages
            </Nav.Link>
            <Nav.Link href="#pricing" className={style.padding}>
              Blog
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes" className={style.rightIcon}>
              <BiSearch className={style.icon} />
            </Nav.Link>
            <Nav.Link href="#deets" className={style.rightIcon}>
              <HiOutlineShoppingCart className={style.icon} />
            </Nav.Link>
            <Nav.Link href="#deets" className={style.rightIcon}>
              <GoPerson className={style.icon} /> Register /{" "}
              <BiLogIn className={style.icon} /> Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
