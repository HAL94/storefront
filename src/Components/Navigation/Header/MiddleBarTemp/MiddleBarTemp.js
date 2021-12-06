import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import LeftMiddleBar from './LeftMiddleBar/LeftMiddleBar';
import SearchForm from './SearchForm/SearchForm';
import CartComponent from './CartComponent/CartComponent';
// import useWindowDimensions from '../../../../Hooks/useWindowDimensions';

function MiddleBarTemp() {
    // const { width } = useWindowDimensions();

    return (
        <Navbar expand="lg">
            <Container fluid>
                <Nav className="w-100">
                    <LeftMiddleBar/>
                    <SearchForm/>
                    <CartComponent/>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default MiddleBarTemp
