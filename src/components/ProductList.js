import { addToCart } from "../actions/cartAction";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../actions/wishlistAction";

const ProductList = ({ products }) => {
    const dispatch = useDispatch();

    return (
        <>
            <h1><strong>Product Page</strong></h1>
            {products.map(product => (
                <div key={product.id}>
                    <p>{product.name} - ${product.price}</p>
                    <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
                    <button onClick={() => dispatch(addToWishlist(product))}>Add to wishlist</button>
                </div>
            ))}
        </>
    )
}

export default ProductList;