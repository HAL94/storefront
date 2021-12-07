import React from "react";
import FeatherIcon from "feather-icons-react";
import classes from "./CartComponent.module.css";

function CartComponent() {
  return (
    <div
      className={`d-flex align-items-center ${classes["responsive_justify_right"]} cursor_pointer`}
    >
      <FeatherIcon icon="heart" size="16" />
      <div className="cart d-flex align-items-center mx-3 cursor-pointer mx-2">
        <div className="cart-icon mx-2">
          <div type="button" className=" position-relative">
            <FeatherIcon icon="shopping-cart" size="23" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              9<span className="visually-hidden">unread messages</span>
            </span>
          </div>
        </div>
        <div
          className={`${classes["cart-text"]} d-flex flex-row mx-2 align-items-center`}
        >
          <div className="d-flex flex-column">
            <span className={classes["cart-title"]}>My Cart</span>
            <span className={classes["cart-total-price"]}>0.00 SAR</span>
          </div>
          <FeatherIcon
            icon="chevron-down"
            size="16"
            className="mx-2"/>
        </div>
      </div>
    </div>
  );
}

export default CartComponent;
