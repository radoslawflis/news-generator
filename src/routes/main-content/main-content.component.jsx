import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import Footer from '../../components/footer/footer.component';

import './main-content.styles.scss';

const MainContent = () => {
	return (
		<>
			<Header />
			<div className='main-container'>
				<Sidebar />
				<Outlet />
			</div>
			<Footer />
		</>
	);
};

export default MainContent;
