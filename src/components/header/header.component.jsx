import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectViewSetting } from '../../store/view-setting/view-setting.selector';
import { setViewSetting } from '../../store/view-setting/view-setting.slice';

import './header.styles.scss';
import '../../assets/logo-globe.svg';

const Header = () => {
	const dispatch = useDispatch();
	const handleDisplaySetting = () => {
		dispatch(setViewSetting());
	};

	console.log('TOGGLE', useSelector(selectViewSetting));

	return (
		<div className='header-container'>
			<Link to='/'>
				<div className='logo-container'>
					<div className='header-logo'></div>
					<span className='text-logo'>Newsify</span>
				</div>
			</Link>
			<div>
				<button onClick={handleDisplaySetting}>Change Display</button>
				<button>Popup</button>
			</div>
		</div>
	);
};

export default Header;
