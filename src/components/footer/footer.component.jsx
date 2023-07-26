import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './footer.styles.scss';
import { selectTotalArticles } from '../../store/country/country.selector';

const Footer = () => {
	const [time, setTime] = useState(new Date());
	// const articlesCount = useSelector(selectTotalArticles);

	useEffect(() => {
		setInterval(() => setTime(new Date()), 1000);
	}, []);

	return (
		<div className='footer-container'>
			<h3>Current Time: {time.toLocaleTimeString()}</h3>
			<h3>Articles Count: </h3>
		</div>
	);
};

export default Footer;
