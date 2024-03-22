import { useState, useEffect } from 'react';

// import './footer.styles.scss';

const Timer = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => setTime(new Date()), 1000);
		return () => clearInterval(intervalId);
	}, []);

	return <h3>Current Time: {time.toLocaleTimeString()}</h3>;
};

export default Timer;
