import React from 'react';

import classes from './SearchForm.module.css';

function SearchForm() {
    return (
        <form className={`input-group ms-auto align-content-center ${classes['search-field-item']} ${classes['responsive_search_field_item']}`}>
            <input type="text" className="form-control" placeholder="Search for stores, categories, products.." aria-label="Search Products" />
            <span className="input-group-text" id="search-btn">Search</span>
        </form>
    )
}

export default SearchForm
