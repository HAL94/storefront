import React from "react";
import classes from "./Footerbar.module.css";
import Logo from "../../../../src/Assets/logo_white.svg";
import Googleplay from "../../../../src/Assets/Google-Play.svg";
import Applestore from "../../../../src/Assets/Apple-Store.svg";
import Mada from "../../../../src/Assets/mada.svg";
import instagram from "../../../../src/Assets/instagram_icn.svg";
import Mastercard from "../../../../src/Assets/MasterCard.svg";
import stcpay from "../../../../src/Assets/stcpay.svg";
import visalogo from "../../../../src/Assets/Visa_logo.svg";
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

      <div className={classes["copyrights"]}>
        <Container fluid>
          <Row>
            <Col sm={6}>
              <div className={classes["copyright_left"]}>
                <p>Pay Securely with us</p>
                <div>
                  <img src={visalogo} alt="" srcset="" /> &nbsp;
                  <img src={Mastercard} alt="" srcset="" />
                  &nbsp;
                  <img src={stcpay} alt="" srcset="" />
                  &nbsp;
                  <img src={Mada} alt="" srcset="" />
                  &nbsp;
                </div>
              </div>
            </Col>
            <Col sm={6}>
              <div className={classes["copyright_right"]}>
                <p>© 2021 Ramzaula. All Rights Reserved</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
