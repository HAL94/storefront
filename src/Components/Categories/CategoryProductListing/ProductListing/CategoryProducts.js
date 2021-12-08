import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./CategoryProducts.module.css";
// import product from "Assets/apples.jpg";

function CategoryProducts() {
  const [data, setData] = useState([]);
  const getData = async () => {
    /**
     * 
     * Classic JS Approach
     */

    // fetch("products_local.json", {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    // })
    //   .then(function (response) {
    //     console.log(response);
    //     return response.json();
    //   })
    //   .then(function (myJson) {
    //     console.log(myJson);
    //     setData(myJson);
    //   });

    /** Modern ES6 Approach */
    const response = await fetch("products_local.json");
    const data = await response.json();
    setData(data);
  };
  useEffect(() => {
    const getDataTemp = async () => {
      await getData();
    }

    getDataTemp();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {data.map((item) => (
            <Col md={3} key={item.id}>
              <div className={classes["product_box"]}>
                <img src={item.image} alt={item.item} />
                <h4>{item.item}</h4>
                <h2>
                  SAR<span>{item.price}</span>
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
