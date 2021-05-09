import CartContext from './cart-context.js';

const CartProvider = props => {
	const addToCartHandler = item => {};

	const removeFromCarthandler = id => {};

	const cartContext = {
		items: [],
		totalAmount: 0,
		addItem: addToCartHandler,
		removeItem: removeFromCarthandler,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
