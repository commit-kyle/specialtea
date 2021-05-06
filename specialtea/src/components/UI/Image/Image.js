import classes from './Image.module.css';

import image from '../../../assets/images/tea-setup.jpg';

const Image = props => {
	const description = 'A table with a teapot and multiple tea cups on it.';

	return (
			<div className={classes.container} >
				<img className={classes.image} src={image} alt={description} />
			</div>
	);
};

export default Image;
