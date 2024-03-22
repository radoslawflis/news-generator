import './home.styles.scss';

const Home = () => {
	return (
		<div className='home-container'>
			<div className='home-frame-container'>
				<div className='home-content-container'>
					<div className='home-logo-container'>
						<div className='home-logo'></div>
						<span className='home-text-logo'>Newsify</span>
					</div>
					<div>
						<span className='home-txt'>
							Your source of information around the World
						</span>
					</div>

					<div>
						<span className='home-txt-choice'>
							Choose country to display news
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
