import classes from './Cart.module.css';

const Cart = props => {

	return (
		<div>
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>35.62</span>
			</div>
			<div className={classes.actions}>
				<button className={classes.buttonAlt} onClick={props.onHideCart}>Close</button>
				<button className={classes.button}>Order</button>
			</div>
		</div>
	);
};

export default Cart;
