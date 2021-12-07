import React from 'react'
import Form from 'react-bootstrap/Form';

import classes from './BrandFilter.module.css';
import SearchBrandIcon from 'Assets/search_brand_icon.svg';
import InputGroup from 'react-bootstrap/InputGroup';

const brandFilters = [
    { 'brandName': 'Candyman Fantastik', 'selected': false },
    { 'brandName': 'Britannia', 'selected': false },
    { 'brandName': 'Cookieman', 'selected': false },
    { 'brandName': 'Cadbury', 'selected': false },
    { 'brandName': 'Dukes', 'selected': false },
    { 'brandName': 'Cadbury Bournvita', 'selected': false },
    { 'brandName': 'Cookieman', 'selected': false },
    { 'brandName': 'Cadbury', 'selected': false }
];
function BrandFilter() {
    const brandFiltersComponents = brandFilters.map((brand, idx) => {
        return (
            <li key={idx} className="cursor_pointer d-flex justify-content-between align-items-center">
                <Form.Group>
                    <Form.Check type="checkbox" label={brand.brandName} selected={brand.selected} className="mr-1" />
                </Form.Group>
            </li>
        )
    })
    return (
        <div className="filter_option p-2 filter_item_mg">
            <span className='filter_title'>Brand</span>
            <Form className="mb-1">
                <InputGroup className="position-relative">
                    <Form.Control
                        className={`mt-1 mb-3 ${classes['form_input']}`}
                        type="text"
                        placeholder="Search Brand" style={{ 'width': '190px', 'borderRadius': '6px' }} />
                    <img src={SearchBrandIcon} alt="" className={`position-absolute ${classes['search_brand_icon']}`}/>

                </InputGroup>
                <ul className="list-group">
                    {brandFiltersComponents}
                </ul>
            </Form>
        </div>
    )
}

export default BrandFilter
