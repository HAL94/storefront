import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./CategoryProducts.module.css";
import product from "Assets/apples.jpg";

function CategoryProducts() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("products_local.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {data.map((items) => (
            <Col md={3} key="{items}">
              <div className={classes["product_box"]}>
                <img src={items.image} alt={items.item} />
                <h4>{items.item}</h4>
                <h2>
                  SAR<span>{items.price}</span>
                </h2>
                <button className="btn btn-sm btn-outline-primary">
                  Add to cart
                </button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default CategoryProducts;
