import { useSelector } from 'react-redux';
import Timer from '../timer/timer-component';

import './footer.styles.scss';
import { selectTotalArticles } from '../../store/country/country.selector';

const Footer = () => {
	const articlesTotal = useSelector(selectTotalArticles);

	return (
		<div className='footer-container'>
			<Timer />
			<h3>Total available articles: {articlesTotal && articlesTotal} </h3>
		</div>
	);
};

export default Footer;
