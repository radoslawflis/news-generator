import { Route, Routes } from 'react-router-dom';

import TilesContent from './routes/tiles-content/tiles-content.component';
import ListContent from './routes/list-content/list-content.component';
import NotFound from './routes/not-found/not-found-component';
import Home from './routes/home/home.component';
import { useSelector } from 'react-redux';
import { selectViewSetting } from './store/view-setting/view-setting.selector';

import './App.styles.scss';
import MainContent from './routes/main-content/main-content.component';

function App() {
	const toggleView = useSelector(selectViewSetting);

	return (
		<Routes>
			<Route path='/' element={<MainContent />}>
				<Route index element={<Home />} />
				<Route
					path='country/:country'
					element={toggleView ? <TilesContent /> : <ListContent />}
				/>
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}

export default App;
