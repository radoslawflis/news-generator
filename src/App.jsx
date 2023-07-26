import { Route, Routes } from 'react-router-dom';

import Header from './components/header/header.component';
import Sidebar from './components/sidebar/sidebar.component';

import Footer from './components/footer/footer.component';
import TilesContent from './components/tiles-content/tiles-content.component';
import ListContent from './components/list-content/list-content.component';
import { useSelector } from 'react-redux';
import { selectViewSetting } from './store/view-setting/view-setting.selector';

import './App.styles.scss';

function App() {
	const toggleView = useSelector(selectViewSetting);

	return (
		<>
			<Header />
			<div className='main-container'>
				<Sidebar />
				<Routes>
					<Route
						path='country/:country'
						element={
							toggleView ? <TilesContent /> : <ListContent />
						}
					/>
					<Route path='checkout' element={<ListContent />} />
				</Routes>
				{/* <ContentPreview /> */}
			</div>
			<Footer />
		</>
	);
}

export default App;
