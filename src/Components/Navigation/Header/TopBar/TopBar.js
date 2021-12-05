import { faGlobe, faArrowAltCircleRight, faMobile } from "@fortawesome/free-solid-svg-icons";

// Feather Icon currently not working...
// import FeatherIcon from 'feather-icons-react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from './TopBar.module.css';

const TopBar = (props) => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${classes['custom-light-bg']}`}>
            <div className="container-fluid">
                <span className="top-bar-download">Order Online 24/7</span>
                <div className="d-flex ml-auto">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-row">
                        <li className="nav-item d-flex align-items-center mx-3">
                            <a className="nav-link d-flex align-items-center" aria-current="page" href="#!">
                                <FontAwesomeIcon icon={faMobile} className={classes['top-bar-icon']}></FontAwesomeIcon>
                                <span>Download App</span>
                            </a>
                        </li>
                        <li className="nav-item d-flex align-items-center mx-3">
                            <a className="nav-link d-flex align-items-center" href="#!">
                                <FontAwesomeIcon icon={faGlobe} className={classes['top-bar-icon']}></FontAwesomeIcon>
                                <span>English</span>
                            </a>
                        </li>
                        <li className="nav-item d-flex align-items-center mx-3">
                            <a href="#!" className={`${classes['login-btn']} d-flex align-items-center`}>
                                <FontAwesomeIcon icon={faArrowAltCircleRight} className={classes['top-bar-icon']}></FontAwesomeIcon>
                                <span>Login / Register</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default TopBar;