import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import classes from './BottomBar.module.css';

import { faGift } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BottomBarTemp() {
    return (
        <Navbar className="primary_bg" expand="lg">
            <Container fluid>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={`${classes['font_white']}`}>ELECTRONICS</Nav.Link>
                        <Nav.Link href="#link" className={`${classes['font_white']}`}>HOME & LIVING</Nav.Link>
                        <Nav.Link href="#link" className={`${classes['font_white']}`}>COOKING</Nav.Link>
                        <Nav.Link href="#link" className={`${classes['font_white']}`}>FRESH FOOD</Nav.Link>
                        <Nav.Link href="#link" className={`${classes['font_white']}`}>BEVERAGES</Nav.Link>
                        <Nav.Link href="#link" className={`${classes['font_white']}`}>DRINKS</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link href="#!">
                            <Button className={`${classes['buy_again_btn']}`}>
                                <FontAwesomeIcon icon={faGift} className="mx-2"></FontAwesomeIcon>
                                Buy Again
                            </Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default BottomBarTemp;
