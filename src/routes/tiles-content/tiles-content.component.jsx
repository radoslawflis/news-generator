import { useSelector } from 'react-redux';
import TileNews from '../../components/tile-news/tile-news.component';

import { selectCountryArticlesReducer } from '../../store/country/country.selector';

import './tiles-content.styles.scss';

const TilesContent = () => {
	const articles = useSelector(selectCountryArticlesReducer);

	return (
		<div className='tiles-content-container'>
			{articles &&
				articles.map((article) => (
					<TileNews key={article.title} article={article} />
				))}
		</div>
	);
};

export default TilesContent;
