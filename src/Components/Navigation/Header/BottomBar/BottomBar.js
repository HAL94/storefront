import React from 'react'
import classes from './BottomBar.module.css';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BottomBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light primary_bg p-3">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className='nav-item'>
                            <a className='nav-link' href="#!" style={{'color': '#fff'}}>ELECTRONICS</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#!" style={{'color': '#fff'}}>HOME & LIVING</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#!" style={{'color': '#fff'}}>COOKING</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#!" style={{'color': '#fff'}}>FRESH FOOD</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#!" style={{'color': '#fff'}}>BEVERAGES</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#!" style={{'color': '#fff'}}>DRINKS</a>
                        </li>
                    </ul>
                </div>
                <button className={`${classes['btn']} p-2`}>
                    <FontAwesomeIcon icon={faGift} className="mx-2" />
                    Buy Again
                </button>
            </div>
        </nav>
    )
}

export default BottomBar
