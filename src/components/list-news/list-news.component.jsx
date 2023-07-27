import './list-news.styles.scss';

const ListNews = ({ article }) => {
	const { title, source, publishedAt, urlToImage } = article;

	const getDateDay = (date) => {
		const publishedDate = date.split('T')[0];
		return publishedDate;
	};

	return (
		<div className='tile-news-container'>
			<div>
				<h5>{title}</h5>
			</div>
			<div>{source?.name}</div>
			<div>{getDateDay(publishedAt)}</div>
		</div>
	);
};

export default ListNews;
