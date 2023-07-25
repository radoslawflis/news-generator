const CardNews = ({ article }) => {
	const { title, source, publishedAt } = article;

	const getDateDay = (date) => {
		const publishedDate = date.split('T')[0];
		return publishedDate;
	};

	return (
		<div className='card-news-container'>
			<div>
				<h5>{title}</h5>
			</div>
			<div>{source?.name}</div>
			<div>{getDateDay(publishedAt)}</div>
		</div>
	);
};

export default CardNews;
