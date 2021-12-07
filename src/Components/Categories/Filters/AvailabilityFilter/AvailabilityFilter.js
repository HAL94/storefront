import React from 'react'
import Form from 'react-bootstrap/Form';

function AvailabilityFilter() {
    return (
        <div className="filter_option p-2 filter_item_mg">
            <span className='filter_title'>Availability</span>
            <Form className="mb-1">
                <ul className="list-group mt-3">
                    <Form.Group>
                        <Form.Check type="checkbox" label={'Include Out of Stock'} className="mr-1" />
                    </Form.Group>
                </ul>
            </Form>
        </div>
    )
}

export default AvailabilityFilter
