import React from 'react'


import FeatherIcon from 'feather-icons-react';

import classes from './AuthButton.module.css';

function AuthButton() {
    return (
        <button href="#!" className={`${classes['login-btn']} d-flex align-items-center`}>
            <FeatherIcon icon="log-in" size="16" className={classes['top-bar-icon']} />
            <span>Login / Register</span>
        </button>
    )
}

export default AuthButton;
