import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import classes from './PriceFilter.module.css';

function PriceFilter() {
    return (
        <div className="filter_option p-2 filter_item_mg">
            <span className='filter_title'>Price</span>
            <Form className="mb-1">
                <InputGroup className="position-relative d-flex align-items-center">
                    <Form.Control
                        className={`rounded mt-1 mx-1 mb-3 ${classes['form_input']}`}
                        type="number"
                        placeholder="From" />

                    <Form.Control
                        className={`rounded mt-1 mx-1 mb-3 ${classes['form_input']}`}
                        type="number"
                        placeholder="To" />

                    <Button variant="outline-light" className={classes['price_filter_btn']}>GO</Button>
                </InputGroup>
            </Form>
        </div>
    )
}

export default PriceFilter;
