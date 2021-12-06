import React from "react";
import classes from "./Footerbar.module.css";
import Logo from "../../../../src/Assets/logo_white.svg";
import Googleplay from "../../../../src/Assets/Google-Play.svg";
import Applestore from "../../../../src/Assets/Apple-Store.svg";
import Mada from "../../../../src/Assets/mada.svg";
import instagram from "../../../../src/Assets/instagram_icn.svg";
import facebook from "../../../../src/Assets/facebook_icn.svg";
import google from "../../../../src/Assets/google_icn.svg";
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
        <Row className={`${classes["news_letter"]} pt-3`}>
          <Col className="text-center">
            <img src={Logo} alt="" srcset="" />
          </Col>
          <Col>
            <Form>
              <Form.Group
                className="mb-3 text-center"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className={classes["labels"]}>
                  Subscribe to our Newsletters
                </Form.Label>
                <Form.Control
                  className={classes["text"]}
                  type="text"
                  placeholder="Enter your email address"
                />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <div className={classes["contact_us"]}>
              <h3>GET IN TOUCH</h3>
              <span>With our support channels </span>
              <h4>Support@ramzalula.com</h4>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid>
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
              </ul>
            </div>
          </Col>
          <Col>
            <div className={`${classes["footer_social_media"]}`}>
              <h4>Social Media</h4>
              <div>
                <img src={facebook} alt="" srcset="" />
                <img src={google} alt="" srcset="" />
                <img src={instagram} alt="" srcset="" />
              </div>
            </div>
            <div className={`${classes["footer_app_store"]} mt-4`}>
              <h4>Applications</h4>
              <div>
                <img src={Googleplay} alt="" srcset="" />
                <img src={Applestore} alt="" srcset="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className={classes["copyrights"]}>
        <Container fluid>
          <Row>
            <Col sm={6}>
              <div className={classes["copyright_right"]}>
                <p>© 2021 Ramzaula. All Rights Reserved</p>
              </div>
            </Col>
            <Col sm={6}>
              <div className={classes["copyright_left"]}>
                <p>Pay Securely with us</p>
                <div>
                  <img src={Mastercard} alt="" srcset="" />
                  &nbsp;
                  <img src={stcpay} alt="" srcset="" />
                  &nbsp;
                  <img src={Mada} alt="" srcset="" />
                  &nbsp;
                  <img src={visalogo} alt="" srcset="" />
                  &nbsp;
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
