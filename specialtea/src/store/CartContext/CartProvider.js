import { useReducer } from 'react';

import CartContext from './cart-context.js';

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === 'ADD') {
		const updatedTotalAmount =
			state.totalAmount + action.item.price * action.item.amount;

		const existingCartItemIdx = state.items.findIndex(
			item => item.id === action.item.id
		);

		const existingCartItem = state.items[existingCartItemIdx];

		let updatedItems;

		if (existingCartItem) {
			const updatedItem = {
				...existingCartItem,
				amount: existingCartItem.amount + action.item.amount
			};
			updatedItems = [...state.items];
			updatedItems[existingCartItemIdx] = updatedItem;
		} else {
			updatedItems = state.items.concat(action.item);
		}

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}

	return defaultCartState;
};

const CartProvider = props => {
	const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

	const addToCartHandler = item => {
		dispatchCart({ type: 'ADD', item: item });
	};

	const removeFromCarthandler = id => {
		dispatchCart({ type: 'REMOVE', id: id });
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
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
