import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Filters from './Filters/Filters';
import { Card } from 'react-bootstrap';
import CategoryProductListing from './CategoryProductListing/CategoryProductListing';

function Categories() {
    return (
        <Row>
            <Col xs={12} lg={3}>
                <Card className="shadow">
                    <Filters />
                </Card>
            </Col>
            <Col xs={12} lg={9}>
                <Card className="shadow p-4">
                    <CategoryProductListing/>
                </Card>
            </Col>
        </Row>
    )
}

export default Categories
