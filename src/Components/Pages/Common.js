import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import classes from "./Cmm.module.css";
function Common() {
  return (
    <div>
      <Container>
        <Row>
          <Col className={classes["bodypart"]}>
            <h1>Welcome to Best Basket</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Common;
