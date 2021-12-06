import React from 'react'

import classes from './CartComponent.module.css';
import { faChevronDown, faHeart, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CartComponent() {
    return (
        <div className={`d-flex align-items-center`}>
            <FontAwesomeIcon icon={faHeart} className={`mx-2 fs-2 ${classes['responsive_display_none']}`}></FontAwesomeIcon>
            <div className="cart d-flex align-items-center mx-3 cursor-pointer mx-2">
                <div className="cart-icon mx-2">
                    <FontAwesomeIcon icon={faCartPlus} className="fs-2"></FontAwesomeIcon>
                </div>
                <div className={`${classes['cart-text']} d-flex flex-row mx-2 align-items-center`}>
                    <div className="d-flex flex-column">
                        <span className={classes['cart-title']}>
                            My Cart
                        </span>
                        <span className={classes['cart-total-price']}>0.00 SAR</span>
                    </div>
                    <FontAwesomeIcon icon={faChevronDown} className="mx-2"></FontAwesomeIcon>
                </div>
            </div>
        </div>
    )
}

export default CartComponent;
