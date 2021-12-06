import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

import classes from './AuthButton.module.css';

function AuthButton() {
    return (
        <a href="#!" className={`${classes['login-btn']} d-flex align-items-center`}>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className={classes['top-bar-icon']}></FontAwesomeIcon>
            <span>Login / Register</span>
        </a>
    )
}

export default AuthButton;
