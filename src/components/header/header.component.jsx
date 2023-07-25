import logo from '../../assets/logo.png';

import './header.styles.scss';

const Header = () => {
	return (
		<div className='header-container'>
			<h1>News Generator</h1>
			<button>Change Display</button>
			<button>Popup</button>
		</div>
	);
};

export default Header;
