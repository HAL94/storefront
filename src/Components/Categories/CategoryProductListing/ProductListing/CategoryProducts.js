import React from "react";
import { useSelector } from 'react-redux'
import { Col, Container, Row } from "react-bootstrap";
import classes from "./CategoryProducts.module.css";
// import product from "Assets/apples.jpg";
// import CategoryProductContext from 'Store-h/category-product-context';

function CategoryProducts() {
  const displayedProducts = useSelector(state => state.categoryProducts.displayedProducts)
  // console.log(displayedProducts);
  return (
    <div>
      <Container>
        <Row>
          {displayedProducts.map((item) => (
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
