import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const Checkout = () => {
	const { cartItems, addItemToCart, removeItemsToCart } = useContext(CartContext);

	return (
		<div>
			<h1>sadasda</h1>
			<div>
				{cartItems.map((cartItem) => {
					const { id, name, quantity } = cartItem;
					return (
						<div key={id}>
							<h2>{name}</h2>
							<span>{quantity}</span>
							<span onClick={() => removeItemsToCart(cartItem)}>decrement</span>
              <br />
							<span onClick={() => addItemToCart(cartItem)}>increment</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Checkout;
