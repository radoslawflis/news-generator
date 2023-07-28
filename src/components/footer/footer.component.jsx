import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Timer from '../timer/timer-component';

import './footer.styles.scss';
import { selectCountryArticlesReducer } from '../../store/country/country.selector';

const Footer = () => {
	const article = useSelector(selectCountryArticlesReducer);

	return (
		<div className='footer-container'>
			<Timer />
			<h3>Articles Count: {article && article.length} </h3>
		</div>
	);
};

export default Footer;
