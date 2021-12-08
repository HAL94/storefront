import { createSlice } from '@reduxjs/toolkit';

const initialCategoryProductState = { 
    data: [],
    displayedProducts: [],
    sortDirection: 0
};

const sortAscending = (list) => {
    const ascCompare = ( a, b ) => {
        if ( a.price < b.price ){
          return -1;
        }
        if ( a.price > b.price ){
          return 1;
        }
        return 0;
    }
      
    const sortedData = [...list.sort(ascCompare)];
    return sortedData;
}

const sortDescending = (list) => {
    const descCompare = ( a, b ) => {
        if ( a.price > b.price ){
          return -1;
        }
        if ( a.price < b.price ){
          return 1;
        }
        return 0;
    }
      
    const sortedData = [...list.sort(descCompare)];
    return sortedData;
}

const categoryProductsSlice = createSlice({
    name: 'category_products',
    initialState: initialCategoryProductState,
    reducers: {
        setProducts(state, action) {
            console.log(action);
            state.displayedProducts = action.payload;
            state.data = action.payload;
        },
        filterProductsBySearchTerm(state, action) {
            let displayedProducts = [];

            if (action.payload !== '') {
                displayedProducts = state.data.filter((product) => product.item.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1);
            } else {
                displayedProducts = state.data;
            }

            if (state.sortDirection === 2) {
                displayedProducts = sortAscending(displayedProducts);
            } else if (state.sortDirection === 1) {
                displayedProducts = sortDescending(displayedProducts);
            }

            state.displayedProducts = displayedProducts;            
        },
        filterProductsLowToHigh(state, action) {
            state.sortDirection = action.payload;
            const sortedProducts = sortAscending(state.displayedProducts);
            state.displayedProducts = sortedProducts;
        },
        filterProductsHighToLow(state, action) {
            state.sortDirection = action.payload;
            const sortedProducts = sortDescending(state.displayedProducts);
            state.displayedProducts = sortedProducts;
        }
    }
});

export const categoryProductActions = categoryProductsSlice.actions;
export default categoryProductsSlice.reducer;