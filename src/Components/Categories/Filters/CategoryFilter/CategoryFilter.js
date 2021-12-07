import React from 'react'

import classes from './CategoryFilter.module.css';

const categoryFilters = [
    {'catName': 'Health & Personal Care', 'productCount': 9840},
    {'catName': 'Bath & Body', 'productCount': 1243},
    {'catName': 'Shaving & Hair Removal', 'productCount': 512},
    {'catName': 'Skin Care', 'productCount': 2247},
    {'catName': 'Hair Care', 'productCount': 3050},
    {'catName': 'Hair Care', 'productCount': 3050},
    {'catName': 'Health Care', 'productCount': 1414},
    {'catName': 'Fragrance', 'productCount': 789},

]
function CategoryFilter() {
    const catFilters = categoryFilters.map((catFilter, idx) => {
        return (
            <li key={idx} className={`d-flex justify-content-between align-items-center ${classes['filter_item']} my-1 cursor_pointer`}>
                <span className="cat_filter_text">{catFilter.catName}</span>
                <span className="cat_filter_number">({catFilter.productCount})</span>
            </li>
        );
    })
    return (
        <div className="filter_option p-4">
            <span className='filter_title'>Category</span>
            <ul className="list-group">
                {catFilters}
            </ul>
        </div>
    )
}

export default CategoryFilter
