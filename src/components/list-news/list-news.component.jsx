import { useState } from 'react';
import PopUp from '../pop-up/pop-up.component';

import './list-news.styles.scss';

const ListNews = ({ article }) => {
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
			<PopUp
				open={openPopUp}
				onClose={() => setOpenPopUp(false)}
				article={article}
			/>
			<div>
				<h5>{title}</h5>
			</div>
			<div>{source?.name}</div>
			<div>{getDateDay(publishedAt)}</div>
		</div>
	);
};

export default ListNews;
