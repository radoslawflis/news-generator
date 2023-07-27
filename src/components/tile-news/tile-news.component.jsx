import { useState } from 'react';
import PopUp from '../pop-up/pop-up.component';
import './tile-news.styles.scss';

const TileNews = ({ article }) => {
	const [openPopUp, setOpenPopUp] = useState(false);
	const { title, source, publishedAt, urlToImage } = article;

	const getDateDay = (date) => {
		const publishedDate = date.split('T')[0];
		return publishedDate;
	};

	return (
		<div
			className='tile-news-container'
			onClick={() => setOpenPopUp(!openPopUp)}
		>
			{/* <button >Modal</button> */}
			<PopUp
				open={openPopUp}
				onClose={() => setOpenPopUp(false)}
				article={article}
			/>
			{urlToImage && (
				<img className='img-news' src={urlToImage} alt={title} />
			)}
			<div>
				<h5>{title}</h5>
			</div>
			<div>{source?.name}</div>
			<div>{getDateDay(publishedAt)}</div>
		</div>
	);
};

export default TileNews;
