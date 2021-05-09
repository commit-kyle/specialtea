import { useContext } from 'react';

import classes from './TeaItem.module.css';

import TeaItemForm from './TeaItemForm/TeaItemForm';
import CartContext from '../../../store/CartContext/cart-context';

const TeaItem = props => {
	const context = useContext(CartContext);

	const price = `$${props.price.toFixed(2)}`;

	const addToCartHandler = amount => {
		context.addItem({
			id: props.id,
			name: props.name,
			amount: amount,
			price: props.price,
		});
	};

	return (
		<li className={classes.tea}>
			<div className={classes.container}>
				<div className={classes.title}>
					<h3>{props.name}</h3>
					<span className={classes.type}>{props.type}</span>
				</div>
				<div>
					<p className={classes.description}>{props.description}</p>
					<span className={classes.price}>{price}</span>
				</div>
			</div>
			<div>
				<TeaItemForm id={props.id} onAddToCart={addToCartHandler} />
			</div>
		</li>
	);
};

export default TeaItem;
