import React from 'react'
import classes from './LoadingSpinner.module.css';

function LoadingSpinner() {
    return (
        <div className={classes['lds-dual-ring']}>
        </div>
    )
}

export default LoadingSpinner;