import React from "react";
import classes from "./Footerbar.module.css";
import Logo from "../../../../src/Assets/logo_white.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function Footer() {
  return (
    /*  <div className={`${classes["section"]} test`}> */
    <div className={`${classes["section"]}`}>
      <Container>
        <Row>
          <Col>
            <img src={Logo} alt="" srcset="" />
          </Col>
          <Col>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Subscribe to our Newsletters</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your Email Address"
                />
              </Form.Group>
            </Form>
          </Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col>
            <div className={`${classes["footer_info_list"]}`}>
              <h4>MY ACCOUNT</h4>
              <ul>
                <li>Login / Register </li>
                <li>Account Dashboard </li>
                <li>Order History </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className={`${classes["footer_info_list"]}`}>
              <h4>INFOMATION</h4>
              <ul>
                <li>About us</li>
                <li>Privacy Policy</li>
                <li>Order History </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className={`${classes["footer_info_list"]}`}>
              <h4>POLICIES</h4>
              <ul>
                <li>Terms & Conditions</li>
                <li>Return Policy</li>
                <li>Website Accessibility</li>
                <li>Privacy Policy</li>
                <li>Service and Warranty</li>
                <li>Account Dashboard </li>
                <li>Order History </li>
              </ul>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      <div className={classes["copyrigts"]}></div>
      <Container>
        <Row>
          <Col sm={6}>sdfsdf</Col>
          <Col sm={6} className="text-end">
            sdfsd
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
