import CartIcon from '../../../Cart/CartIcon/CartIcon';

import classes from './CartButton.module.css';

const CartButton = props => {
	return (
		<button className={classes.button} onClick={props.onShowCart}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Cart</span>
			<span className={classes.badge}>3</span>
		</button>
	);
};

export default CartButton;
