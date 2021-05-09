import { Fragment, useState } from 'react';

import Header from './components/Layout/Header/Header';
import Teas from './components/Teas/Teas';
import Cart from './components/Cart/Cart';

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);

	const showCartHandler = () => {
		setCartIsShown(true);
	};

	const hideCartHandler = () => {
		setCartIsShown(false);
	};

	return (
		<Fragment>
			{cartIsShown && <Cart onHideCart={hideCartHandler} />}
			<Header onShowCart={showCartHandler} />
			<Teas />
		</Fragment>
	);
}

export default App;
