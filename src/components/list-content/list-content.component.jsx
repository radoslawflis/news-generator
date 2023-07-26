import { useSelector } from 'react-redux';
import CardNews from '../card-news/card-news.component';

import { selectCountryArticlesReducer } from '../../store/country/country.selector';

import './list-content.styles.scss';

const ListContent = () => {
	const articles = useSelector(selectCountryArticlesReducer);

	return (
		<div className='content-preview-container'>
			<div>COMPONEN22222222222222222222222222222222222</div>
			<div>COMPONEN22222222222222222222222222222222222</div>
			<div>COMPONEN22222222222222222222222222222222222</div>
			<div>COMPONEN22222222222222222222222222222222222</div>
			<div>COMPONEN22222222222222222222222222222222222</div>
			{articles &&
				articles.map((article) => (
					<CardNews key={article.title} article={article} />
				))}
		</div>
	);
};

export default ListContent;
