import './card-news.styles.scss';

const CardNews = ({ article }) => {
	const { title, source, publishedAt, urlToImage } = article;

	const getDateDay = (date) => {
		const publishedDate = date.split('T')[0];
		return publishedDate;
	};

	return (
		<div className='card-news-container'>
			{/* {urlToImage && (
				<img className='img-news' src={urlToImage} alt={title} />
			)} */}
			<div>
				<h5>{title}</h5>
			</div>
			<div>{source?.name}</div>
			<div>{getDateDay(publishedAt)}</div>
		</div>
	);
};

export default CardNews;
