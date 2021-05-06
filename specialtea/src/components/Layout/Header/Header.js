import { Fragment } from 'react';

import classes from './Header.module.css';

import hero from '../../../assets/images/tea-setup.jpg';

import Logo from '../../UI/Logo/Logo';


const Header = props => {
	return (
		<Fragment>
			<header className={classes.header}>
        <Logo/>
				<button>Cart</button>
			</header>
			<div className={classes.image}>
				<img src={hero} alt='A table with a teapot and a few tea cups placed on top of it' />
			</div>
		</Fragment>
	);
};

export default Header;
