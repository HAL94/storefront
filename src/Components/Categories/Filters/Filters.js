import React from 'react'
import AvailabilityFilter from './AvailabilityFilter/AvailabilityFilter';
import BrandFilter from './BrandFilter/BrandFilter';
import CategoryFilter from './CategoryFilter/CategoryFilter';
import DiscountFilter from './DiscountFilter/DiscountFilter';
import PriceFilter from './PriceFilter/PriceFilter';
function Filters() {
    return (
        <>
            <CategoryFilter/>
            <BrandFilter/>
            <PriceFilter/>
            <DiscountFilter/>
            <AvailabilityFilter/>
        </>
    )
}

export default Filters
