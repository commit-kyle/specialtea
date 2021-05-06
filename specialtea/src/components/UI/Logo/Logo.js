import classes from './Logo.module.css';

import icon from '../../../assets/images/teacup.png';

const Logo = () => {
	return (
		<div className={classes.logo}>
			<span className={classes.logoPri}>Special</span>
			<span className={classes.logoSec}>Tea</span>
			<div className={classes.iconContainer}>
				<img className={classes.icon} src={icon} alt="A small tea cup" />
			</div>
		</div>
	);
};

export default Logo;
