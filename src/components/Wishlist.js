import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../actions/wishlistAction";

const Wishlist = () => {

    const dispatch = useDispatch();
    const items = useSelector(state => state.wishlist.items)

    return (
        <>
            <h1><strong>Wishlist</strong></h1>
            <div>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.name}
                            <button onClick={() => dispatch(removeFromWishlist(item.id))}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Wishlist;