import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
import classes from "./Cmm.module.css";
import Categories from "Components/Categories/Categories";
function Common() {
  return (
    <div>
      <Container fluid className="my-4">
        <Row>
          <Col className={classes["bodypart"]}>
            {/* <h1>Welcome to Best Basket</h1> */}
            <Categories/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Common;
