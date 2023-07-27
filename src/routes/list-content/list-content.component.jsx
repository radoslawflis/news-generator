import { useSelector } from 'react-redux';
import ListNews from '../../components/list-news/list-news.component';

import { selectCountryArticlesReducer } from '../../store/country/country.selector';

import './list-content.styles.scss';

const ListContent = () => {
	const articles = useSelector(selectCountryArticlesReducer);

	return (
		<div className='list-preview-container'>
			{articles &&
				articles.map((article) => (
					<ListNews key={article.title} article={article} />
				))}
		</div>
	);
};

export default ListContent;
