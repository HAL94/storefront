import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import FeatherIcon from 'feather-icons-react';
import AuthButton from '../Shared/AuthButton/AuthButton';
import classes from './TopBar.module.css';

function TopBar() {
    return (
        <Navbar className={`${classes["custom-light-bg"]} ${classes['responsive_display_none']}` } >
            <Container fluid>
                <span className="top-bar-download">Order Online 24/7</span>
                <Nav>
                    <Nav.Link href="#home" className="d-flex align-items-center">
                        <FeatherIcon icon="smartphone" size="16" className="mx-2" />
                        <span>Download App</span>
                    </Nav.Link>
                    <Nav.Link href="#home" className="d-flex align-items-center">
                        <FeatherIcon icon="globe" size="16" className="mx-2" />
                        <span>English</span>
                    </Nav.Link>
                    <Nav.Link>
                        <AuthButton/>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default TopBar
