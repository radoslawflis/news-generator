import { Route, Routes } from 'react-router-dom';

import Header from './components/header/header.component';
import Sidebar from './components/sidebar/sidebar.component';

import Footer from './components/footer/footer.component';
import ContentPreview from './components/content-preview/content-preview.component';
import ContentPreview2 from './components/content-preview/content-preview2.component';
import './App.styles.scss';

function App() {
	return (
		<>
			<Header />
			<div className='main-container'>
				<Sidebar />
				<Routes>
					<Route
						path='country/:country'
						element={<ContentPreview />}
					/>
					<Route path='checkout' element={<ContentPreview2 />} />
				</Routes>
				{/* <ContentPreview /> */}
			</div>
			<Footer />
		</>
	);
}

export default App;
