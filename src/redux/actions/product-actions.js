import { ProductActionTypes } from "../constants/product-action-types";

export const allProducts = (products) => {
    return {
        type: ProductActionTypes.ALL_PRODUCTS,
        payload: products
    };
};

export const selectedProduct = (product) => {
    return {
        type: ProductActionTypes.SELECTED_PRODUCT,
        payload: product
    };
};

export const removeProduct = () => {
    return {
        type: ProductActionTypes.REMOVE_PRODUCT
    };
};