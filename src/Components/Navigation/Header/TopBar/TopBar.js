import {
  faGlobe,
  faArrowAltCircleRight,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import FeatherIcon from "feather-icons-react";

// Feather Icon currently not working...
// import FeatherIcon from 'feather-icons-react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./TopBar.module.css";

const TopBar = (props) => {
  return (
    <nav
      className={`navbar p-1 navbar-expand-lg navbar-light ${classes["custom-light-bg"]} ${classes["display_none"]}`}
    >
      <div className="container-fluid">
        <span className="top-bar-download">Order Online 24/7</span>
        <div className="d-flex ml-auto">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-row">
            <li className="nav-item d-flex align-items-center ">
              <a
                className="nav-link d-flex align-items-center"
                aria-current="page"
                href="#!"
              >
                <FeatherIcon icon="smartphone" size="16" />
                <span>Download App</span>
              </a>
            </li>
            <li className="nav-item d-flex align-items-center ">
              <a className="nav-link d-flex align-items-center" href="#!">
                <FeatherIcon icon="globe" size="16" />
                {/* <FontAwesomeIcon
                  icon={faGlobe}
                  className={classes["top-bar-icon"]}
                ></FontAwesomeIcon> */}
                <span>English</span>
              </a>
            </li>
            <li className="nav-item d-flex align-items-center mx-3">
              <a
                href="#!"
                className={`${classes["login-btn"]} d-flex align-items-center`}
              >
                <FeatherIcon icon="log-in" size="16" />

                <span>Login / Register</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
