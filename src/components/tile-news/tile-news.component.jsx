import { useState } from 'react';
import PopUp from '../pop-up/pop-up.component';
import './tile-news.styles.scss';

const TileNews = ({ article }) => {
	const [openPopUp, setOpenPopUp] = useState(false);
	const { title, source, publishedAt, image } = article;

	const getDateDay = (date) => {
		const publishedDate = date.split('T')[0];
		const publishedTime = date.split('T')[1].split('Z')[0];
		return { publishedDate, publishedTime };
	};
	const { publishedDate, publishedTime } = getDateDay(publishedAt);

	return (
		<div
			className='tile-news-container'
			onClick={() => setOpenPopUp(!openPopUp)}
		>
			<PopUp
				open={openPopUp}
				onClose={() => setOpenPopUp(false)}
				article={article}
			/>
			<div>
				{image && (
					<img className='tile-img-news' src={image} alt={title} />
				)}
				<div className='tile-date'>
					<span>{source?.name}</span>
					<span>
						{publishedDate} {publishedTime}
					</span>
				</div>
				<div className='tile-title-container'>
					<span className='title-txt'>{title}</span>
				</div>
			</div>
			<div className='tile-button-container'>
				<button>Learn more</button>
			</div>
		</div>
	);
};

export default TileNews;
