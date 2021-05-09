import { useContext } from 'react';

import classes from './CartButton.module.css';

import CartIcon from '../../../Cart/CartIcon/CartIcon';
import CartContext from '../../../../store/CartContext/cart-context';

const CartButton = props => {
	const context = useContext(CartContext);

	const numOfCartItems = context.items.reduce((current, item) => {
		return current + item.amount;
	}, 0);

	return (
		<button className={classes.button} onClick={props.onShowCart}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Cart</span>
			<span className={classes.badge}>{numOfCartItems}</span>
		</button>
	);
};

export default CartButton;
