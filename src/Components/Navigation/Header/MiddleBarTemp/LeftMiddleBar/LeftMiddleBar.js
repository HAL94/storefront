import React from 'react'
import Logo from '../../../../../Assets/app-logo.png';

import DeliveryComponent from '../../Shared/DeliveryComponent/DeliveryComponent';
import classes from './LeftMiddleBar.module.css';
import useWindowDimensions from '../../../../../Hooks/useWindowDimensions';
import AuthButton from '../../Shared/AuthButton/AuthButton';

function LeftMiddleBar() {
    const { width } = useWindowDimensions();
    const displayedComponent = width <= 991 ? <AuthButton/> : <DeliveryComponent/>
    return (
        <div className={`navbar-nav me-auto left-navbar align-items-center flex-row ${classes['responsive_md_navbar']}`}>
            <a className="navbar-brand mx-3" href="#!">
                <img src={Logo} alt={'Biz Basket'} />
            </a>
            {displayedComponent}
        </div>
    )
}

export default LeftMiddleBar
