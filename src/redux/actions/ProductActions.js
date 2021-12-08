import actionTypes from "redux/constants/ActionTypes";

// FETCHING CATEGORY PRODUCTS
export const setProducts = (products){
    return{
        type: actionTypes.SET_PRODUCTS,
        payload: products,
    }
}
//SIGNLE PRODUCT
export const selectedProduct = (product){
    return{
        type: actionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}
