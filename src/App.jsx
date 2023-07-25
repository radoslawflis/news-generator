import { useEffect, useState } from 'react';

import Header from './components/header/header.component';
import Sidebar from './components/sidebar/sidebar.component';

import Footer from './components/footer/footer.component';
import ContentPreview from './components/content-preview/content-preview.component';
import './App.styles.scss';

function App() {
	return (
		<>
			<Header />
			<div className='main-container'>
				<Sidebar />
				<ContentPreview />
			</div>
			<Footer />
		</>
	);
}

export default App;
