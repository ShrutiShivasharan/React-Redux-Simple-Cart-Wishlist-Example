export const addToCart = (product) => ({
    type : "ADD_TO_CART",
    payload:product
});

export const removeCart = () => ({
    type : "REMOVE_CART"
});

export const removeFromCart = (productId) => ({
    type : "REMOVE_FROM_CART",
    payload:productId
});

export const incrementQuantity = (productId) => ({
    type : "INCREMENT_QUANTITY",
    payload:productId
});

export const decrementQuantity = (productId) => ({
    type : "DECREMENT_QUANTITY",
    payload:productId
});

export const applyDiscount = (discountCode) => ({
    type : "APPLY_DISCOUNT",
    payload:discountCode
});

export const calculateTotal = () => ({
    type : "CALCULATE_TOTAL"
});