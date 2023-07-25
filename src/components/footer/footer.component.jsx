import { useState, useEffect } from 'react';

import './footer.styles.scss';

const Footer = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		setInterval(() => setTime(new Date()), 5000);
	}, []);

	return (
		<div className='footer-container'>
			<h3>Current Time: {time.toLocaleTimeString()}</h3>
			<h3>Articles Count: </h3>
		</div>
	);
};

export default Footer;
