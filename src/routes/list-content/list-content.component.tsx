import { useSelector } from 'react-redux';
import ListNews from '../../components/list-news/list-news.component';

import {
	selectCountryArticles,
	selectCountryArticlesIsLoading,
} from '../../store/country/country.selector';

import GridLoader from 'react-spinners/GridLoader';

import './list-content.styles.scss';

const ListContent = () => {
	const articles = useSelector(selectCountryArticles);
	const isLoading = useSelector(selectCountryArticlesIsLoading);

	return (
		<div className='list-preview-container'>
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
					<ListNews key={article.title} article={article} />
				))
			)}
		</div>
	);
};

export default ListContent;
