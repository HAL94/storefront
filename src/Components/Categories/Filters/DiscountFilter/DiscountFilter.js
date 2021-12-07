import React from 'react'

import Form from 'react-bootstrap/Form';

const discountFilters = [
    { 'discountTitle': '50% or more', 'discountPercentage': 50, 'selected': false },
    { 'discountTitle': '40% or more', 'discountPercentage': 40, 'selected': false },
    { 'discountTitle': '30% or more', 'discountPercentage': 30, 'selected': false },
    { 'discountTitle': '20% or more', 'discountPercentage': 20, 'selected': false },
    { 'discountTitle': '10% or more', 'discountPercentage': 10, 'selected': false },
    { 'discountTitle': '10% or below', 'discountPercentage': 10, 'selected': false },
    
];

function DiscountFilter() {
    const discountFiltersComponents = discountFilters.map((discount, idx) => {
        return (
            <li key={idx} className="cursor_pointer d-flex justify-content-between align-items-center">
                <Form.Group>
                    <Form.Check type="checkbox" label={discount.discountTitle} selected={discount.selected} className="mr-1" />
                </Form.Group>
            </li>
        )
    })

    return (
        <div className="filter_option p-2 filter_item_mg">
            <span className='filter_title'>Discounts</span>
            <Form className="mb-1">
                <ul className="list-group mt-3">
                    {discountFiltersComponents}
                </ul>
            </Form>
        </div>
    )
}

export default DiscountFilter
