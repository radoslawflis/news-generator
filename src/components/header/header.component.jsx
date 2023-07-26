import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectViewSetting } from '../../store/view-setting/view-setting.selector';
import { setViewSetting } from '../../store/view-setting/view-setting.slice';

import './header.styles.scss';

const Header = () => {
	const dispatch = useDispatch();
	const handleDisplaySetting = () => {
		dispatch(setViewSetting());
	};

	console.log('TOGGLE', useSelector(selectViewSetting));

	return (
		<div className='header-container'>
			<h1>News Generator</h1>
			<button onClick={handleDisplaySetting}>Change Display</button>
			<button>Popup</button>
		</div>
	);
};

export default Header;
