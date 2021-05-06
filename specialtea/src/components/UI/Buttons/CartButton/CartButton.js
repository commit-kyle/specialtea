import CartIcon from '../../../Cart/CartIcon/CartIcon';

const CartButton = () => {
	return (
		<button>
			<span>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span>3</span>
		</button>
	);
};

export default CartButton;
