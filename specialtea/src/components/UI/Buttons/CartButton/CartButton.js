import { useContext, useEffect, useState } from 'react';

import classes from './CartButton.module.css';

import CartIcon from '../../../Cart/CartIcon/CartIcon';
import CartContext from '../../../../store/CartContext/cart-context';

const CartButton = props => {
	const [btnHighlighted, setBtnHighlighted] = useState(false);

	const context = useContext(CartContext);
	const { items } = context;

	const numOfCartItems = items.reduce((current, item) => {
		return current + item.amount;
	}, 0);

	const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ''}`;

	useEffect(() => {
		if (items.length === 0) {
			return;
		}

		setBtnHighlighted(true);

		const timer = setTimeout(() => {
			setBtnHighlighted(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [items]);

	return (
		<button className={btnClasses} onClick={props.onShowCart}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Cart</span>
			<span className={classes.badge}>{numOfCartItems}</span>
		</button>
	);
};

export default CartButton;
