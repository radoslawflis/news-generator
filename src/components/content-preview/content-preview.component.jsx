import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CardNews from '../card-news/card-news.component';

import {
	// selectCountryArticles,
	selectCountryArticlesReducer,
	selectTotalArticles,
} from '../../store/country/country.selector';

import './content-preview.styles.scss';

const API_KEY = 'f18e36d1a9b042d2b575daf90ade4ce7';

const urlFetchNews = `https://newsapi.org/v2/top-headlines?country=de&pagesize=100&apiKey=${API_KEY}`;
// const urlFetchNews =
// 	'https://newsapi.org/v2/everything?q=bitcoin&apiKey=f18e36d1a9b042d2b575daf90ade4ce7';

const ContentPreview = () => {
	// const [newsApi, setNewsApi] = useState(null);
	const articles = useSelector(selectCountryArticlesReducer);

	// useEffect(() => {
	// 	const fetchNewsApi = async () => {
	// 		try {
	// 			const response = await fetch(urlFetchNews);
	// 			const data = await response.json();
	// 			setNewsApi(data.articles);
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	};
	// 	fetchNewsApi();
	// }, []);

	return (
		<div className='content-preview-container'>
			{articles &&
				articles.map((article) => (
					<CardNews key={article.title} article={article} />
				))}
		</div>
	);
};

export default ContentPreview;
