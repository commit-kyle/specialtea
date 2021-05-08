import classes from './TeaItem.module.css';
import TeaItemForm from './TeaItemForm/TeaItemForm';

const TeaItem = props => {
	const price = `$${props.price.toFixed(2)}`;

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
				<TeaItemForm id={props.id} />
			</div>
		</li>
	);
};

export default TeaItem;
