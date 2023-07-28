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
	return (
		<div className='home-container'>
			<div className='home-frame-container'>
				<div className='home-content-container'>
					<div>
						<span className='home-txt'>
							Page Not Found. Redirecting to the home page
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
