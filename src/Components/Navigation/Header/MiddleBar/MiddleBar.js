import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import LeftMiddleBar from "./LeftMiddleBar/LeftMiddleBar";
import SearchForm from "./SearchForm/SearchForm";
import CartComponent from "./CartComponent/CartComponent";

function MiddleBarTemp() {
  return (
    <Navbar expand="lg" className="p-0">
      <Container fluid>
        <Nav className="w-100">
          <LeftMiddleBar />
          <SearchForm />
          <CartComponent />
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MiddleBarTemp;
