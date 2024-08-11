import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/reducers/cartReducer";

const Cart = () => {
  const dispatch = useDispatch();

  // Access cartItems from the Redux state
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div>{item.title}</div>
              <div>${item.price}</div>
              <button onClick={() => handleRemoveFromCart(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
