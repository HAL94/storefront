import React from 'react'
import Form from 'react-bootstrap/Form';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import classes from './ProductListingHeader.module.css';

function ProductListingHeader() {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <Breadcrumb className={classes['breadcrumb_text']}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                    Snacks & Beverages
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Biscuits</Breadcrumb.Item>
            </Breadcrumb>

            <Form>
                <Form.Group className="mb-3 d-flex align-items-center" controlId='#product_listing_select'>
                    <Form.Label className="mx-2 mb-0" style={{'width': '65px'}}>Sort By</Form.Label>
                    <Form.Select aria-label="Default select example" className={classes['select_ft_size']}>
                        <option>Popularity</option>
                        <option value="1">High To Low</option>
                        <option value="2">Low To High</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
            </Form>
        </div>
    )
}

export default ProductListingHeader
