import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Backdrop from './Backdrop/Backdrop';
import Overlay from './Overlay/Overlay';

const Modal = props => {
	const portalElement = document.getElementById('overlay');

	return (
		<Fragment>
			{ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, portalElement)}
			{ReactDOM.createPortal(
				<Overlay>{props.children}</Overlay>,
				portalElement
			)}
		</Fragment>
	);
};

export default Modal;
