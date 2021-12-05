import React from 'react'
import Logo from '../../../../Assets/app-logo.png';

import { faMapMarkerAlt, faChevronDown, faHeart, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './MiddleBar.module.css';

function MiddleBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">                
                <div className="navbar-nav me-auto left-navbar align-items-center flex-row">
                    <a className="navbar-brand mx-3" href="#!">
                        <img src={Logo} alt={'Biz Basket'} />
                    </a>
                    <div className="delivery-location d-flex align-items-center mx-3 cursor-pointer">
                        <div className="delivery-icon mx-2">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="fs-2"></FontAwesomeIcon>
                            {/* <FeatherIcon icon="close" fill="red" /> */}
                            {/* <i data-feather="circle"></i> */}
                        </div>
                        <div className="delivery-description d-flex flex-column mx-2">
                            <span className={classes['delivery-title']}>Delivery To</span>
                            <span className={classes['delivery-place']}>Dammam</span>
                        </div>
                        <FontAwesomeIcon icon={faChevronDown} className="mx-2"></FontAwesomeIcon>
                    </div>
                </div>
                <div className={`input-group ${classes['search-field-item']}`}>
                    <input type="text" className="form-control" placeholder="Search for stores, categories, products.." aria-label="Search Products"/>
                    <span className="input-group-text" id="search-btn">Search</span>
                </div>
                <form className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faHeart} className="mx-2 fs-2"></FontAwesomeIcon>
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
                </form>
            </div>
        </nav>
    )
}

export default MiddleBar;
