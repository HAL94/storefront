import { configureStore } from '@reduxjs/toolkit';
import categoryProductReducer from './category-product';

const store = configureStore({
    reducer: {
        categoryProducts: categoryProductReducer
    }
});

export default store;
