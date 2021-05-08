import Input from '../../../UI/Input/Input';
import classes from './TeaItemForm.module.css';

const TeaItemForm = props => {
	return (
		<form className={classes.form}>
			<Input
				label={'Quantity'}
				input={{
					id: 'Amount_' + props.id,
					type: 'number',
					min: '1',
					max: '5',
					step: '1',
					defaultValue: '1',
				}}
			/>
			<button>+ Add</button>
		</form>
	);
};

export default TeaItemForm;
