import { useContext } from 'react';

import classes from './Cart.module.css';

import Modal from '../UI/Modal/Modal';
import CartContext from '../../store/CartContext/cart-context';
import CartItem from '../Cart/CartItem/CartItem';

const Cart = props => {
	const context = useContext(CartContext);

	const totalAmount = `$${context.totalAmount.toFixed(2)}`;
	const hasItems = context.items.length > 0;

	const itemRemoveHandler = id => {
		context.removeItem(id);
	};

	const itemAddHandler = item => {
		context.addItem({ ...item, amount: 1 });
	};

	const cartItems = (
		<ul className={classes['cart-items']}>
			{context.items.map(item => {
				return (
					<CartItem
						key={item.id}
						name={item.name}
						amount={item.amount}
						price={item.price}
						onRemove={itemRemoveHandler.bind(null, item.id)}
						onAdd={itemAddHandler.bind(null, item)}
					/>
				);
			})}
		</ul>
	);

	return (
		<Modal onClick={props.onHideCart}>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes.buttonAlt} onClick={props.onHideCart}>
					Close
				</button>
				{hasItems && <button className={classes.button}>Order</button>}
			</div>
		</Modal>
	);
};

export default Cart;
