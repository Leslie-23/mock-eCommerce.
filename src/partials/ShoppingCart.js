import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "../allStyles.css/shoppingCart.css";

const ShoppingCart = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

  const addToCart = () => {
    // Implement your logic to add the product to the cart
    // For demonstration purposes, increment the item count by 1
    setCartItemCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <button class="cartButton" onClick={addToCart}>
        <span className="cart-icon" data-count={cartItemCount}>
          <FontAwesomeIcon icon={faShoppingCart} />
        </span>
      </button>
    </div>
  );
};

export default ShoppingCart;
