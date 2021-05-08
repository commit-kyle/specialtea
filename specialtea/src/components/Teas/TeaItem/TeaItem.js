import classes from './TeaItem.module.css';

const TeaItem = props => {
	const price = `$${props.price.toFixed(2)}`;

	return (
		<li className={classes.tea}>
			<div className={classes.title}>
				<h3>{props.name}</h3>
				<span className={classes.type}>{props.type}</span>
			</div>
			<div>
				<p className={classes.description}>{props.description}</p>
				<span className={classes.price}>{price}</span>
			</div>
			<div></div>
		</li>
	);
};

export default TeaItem;
