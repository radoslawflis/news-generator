import { useState } from 'react';
import PopUp from '../pop-up/pop-up.component';

import './list-news.styles.scss';
import { Article } from '../../store/country/country.slice';

type ListNewsProps = {
	article: Article
}

const ListNews = ({ article }: ListNewsProps) => {
	const [openPopUp, setOpenPopUp] = useState(false);
	const { title, source, publishedAt } = article;

	const getDateDay = (date: string) => {
		const publishedDate = date.split('T')[0];
		const publishedTime = date.split('T')[1].split('Z')[0];
		return { publishedDate, publishedTime };
	};
	const { publishedDate, publishedTime } = getDateDay(publishedAt);

	return (
		<div
			className='list-news-container'
			onClick={() => setOpenPopUp(!openPopUp)}
		>
			<PopUp
				open={openPopUp}
				onClose={() => setOpenPopUp(false)}
				article={article}
			/>
			<div className='list-head'>
				<span>{source?.name}</span>
				<span>
					{publishedDate} {publishedTime}
				</span>
			</div>
			<div className='list-container'>
				<span className='title-txt'>{title}</span>
			</div>

			<div className='list-button-container'>
				<button>Learn more</button>
			</div>
		</div>
	);
};

export default ListNews;
