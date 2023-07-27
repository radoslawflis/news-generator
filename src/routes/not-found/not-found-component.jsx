import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const NotFound = () => {
	// return <Navigate to='/' />;
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate('/');
		}, 2000);
	}, []);
	return <p>Page Not Found. Redirecting to the home page</p>;
};

export default NotFound;
