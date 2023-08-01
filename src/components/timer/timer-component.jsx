import { useState, useEffect } from 'react';

// import './footer.styles.scss';

const Timer = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		setInterval(() => setTime(new Date()), 1000);
	}, []);

	return <h3>Current Time: {time.toLocaleTimeString()}</h3>;
};

export default Timer;
