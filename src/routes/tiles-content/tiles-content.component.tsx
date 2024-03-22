import { useSelector } from 'react-redux';
import TileNews from '../../components/tile-news/tile-news.component';

import {
	selectCountryArticlesIsLoading,
	selectCountryArticles,
} from '../../store/country/country.selector';

import GridLoader from 'react-spinners/GridLoader';

import './tiles-content.styles.scss';

const TilesContent = () => {
	const articles = useSelector(selectCountryArticles);
	const isLoading = useSelector(selectCountryArticlesIsLoading);

	return (
		<div className='tiles-content-container'>
			{isLoading ? (
				<div className='grid-loader-container'>
					<GridLoader
						speedMultiplier={0.6}
						size={50}
						color='#47688d'
					/>
				</div>
			) : (
				articles &&
				articles.map((article) => (
					<TileNews key={article.title} article={article} />
				))
			)}
		</div>
	);
};

export default TilesContent;
