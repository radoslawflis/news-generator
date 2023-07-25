import { useState, useEffect } from 'react';
import CardNews from '../card-news/card-news.component';

import './content-preview.styles.scss';

const API_KEY = 'f18e36d1a9b042d2b575daf90ade4ce7';

const urlFetchNews = `https://newsapi.org/v2/top-headlines?country=de&pagesize=100&apiKey=${API_KEY}`;
// const urlFetchNews =
// 	'https://newsapi.org/v2/everything?q=bitcoin&apiKey=f18e36d1a9b042d2b575daf90ade4ce7';

const ContentPreview = () => {
	const [newsApi, setNewsApi] = useState(null);
	// const [totalResults, setTotalResults] = useState(null);
	useEffect(() => {
		const fetchNewsApi = async () => {
			try {
				const response = await fetch(urlFetchNews);
				const data = await response.json();

				setNewsApi(data.articles);
				console.log('news', data.articles);
			} catch (error) {
				console.log(error);
			}
		};
		fetchNewsApi();
	}, []);

	return (
		<div className='content-preview-container'>
			{newsApi &&
				newsApi.map((article) => (
					<CardNews key={article.title} article={article} />
				))}
		</div>
	);
};

export default ContentPreview;
