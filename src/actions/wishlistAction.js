export const addToWishlist = (product) => ({
    type : "ADD_TO_WISHLIST",
    payload : product
})

export const removeFromWishlist = (productId) => ({
    type : "REMOVE_FROM_WISHLIST",
    payload : productId
})