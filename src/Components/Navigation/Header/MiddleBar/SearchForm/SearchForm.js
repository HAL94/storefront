import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import classes from './SearchForm.module.css';
import { categoryProductActions } from 'Store-h/category-product';


function SearchForm() {
    const searchInputRef = useRef(null);
    const dispatch = useDispatch();

    const onSearchSubmitHandler = (event) => {
        event.preventDefault();
        console.log(searchInputRef);
        const searchTerm = searchInputRef.current.value;
        console.log(searchTerm);
        dispatch(categoryProductActions.filterProductsBySearchTerm(searchTerm));
        
    }

    return (
        <form onSubmit={onSearchSubmitHandler} className={`input-group ms-auto align-content-center ${classes['search-field-item']} ${classes['responsive_search_field_item']}`}>
            <input ref={searchInputRef} type="text" className="form-control" placeholder="Search for stores, categories, products.." aria-label="Search Products" />
            <button type="submit" className="input-group-text" id="search-btn">Search</button>
        </form>
    )
}

export default SearchForm
