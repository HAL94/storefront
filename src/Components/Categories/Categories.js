import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Filters from './Filters/Filters';
import { Card } from 'react-bootstrap';

function Categories() {
    return (
        <Row>
            <Col xs={12} lg={3}>
                <Card>
                    <Filters />
                </Card>
            </Col>
        </Row>
    )
}

export default Categories
