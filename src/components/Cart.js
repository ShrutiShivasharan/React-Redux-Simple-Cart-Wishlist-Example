import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, applyDiscount, calculateTotal, removeCart, removeFromCart } from "../actions/cartAction";

const Cart = () => {

    const dispatch = useDispatch();
    const { items, subTotal, discount, total, shipping, GST } = useSelector(state => state.cart)
    const [coupon, setCoupon] = useState('');

    useEffect(()=>{
        dispatch(calculateTotal());
    },[items, discount, dispatch])

    const handleDecrement = (id) =>{
        dispatch(decrementQuantity(id));
    }
    const handleIncrement = (id) =>{
        dispatch(incrementQuantity(id));
    }
    const handleRemoveById = (id) =>{
        dispatch(removeFromCart(id));
    }

    const handleCouponApply = () => {
        dispatch(applyDiscount(coupon));
        setCoupon(''); //clear input after apply
    }

    const handleClearCart = () => {
        dispatch(removeCart());
    }


    return (
        <>
            <h1><strong>Cart Details</strong></h1>
            {items.map(item => (
                <div key={item.id}>
                    <p>{item.name} - ${item.price}</p>
                    <button onClick={()=> handleDecrement(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={()=> handleIncrement(item.id)}>+</button>
                    <button onClick={()=> handleRemoveById(item.id)}>Remove</button>
                </div>
            ))}
            <div>
                <input type="text" value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder="Enter coupon code ex.50Off" />
                <button onClick={handleCouponApply}>Apply coupon</button>
            </div>
            <div>
                <h3>Payment summary</h3>
                <div>
                    <p>subTotal : {subTotal.toFixed(2)}</p>
                    <p>GST (18%) : {(subTotal * GST).toFixed(2)}</p>
                    <p>shipping : {shipping.toFixed(2)}</p>
                    <p>discount : -{(subTotal * discount).toFixed(2)}</p>
                    <p><strong>Total : {total.toFixed(2)}</strong></p>
                    <button onClick={handleClearCart}>Remove All Cart</button>
                </div>
            </div>
        </>
    )
}

export default Cart;