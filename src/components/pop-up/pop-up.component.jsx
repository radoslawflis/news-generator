import { useEffect } from 'react';
import './pop-up.styles.scss';

const PopUp = ({ open, onClose, article }) => {
	if (!open) return null;
	const { source, content, url, title } = article;

	return (
		<>
			<div onClick={onClose} className='popup-overlay'></div>
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}
				className='popup-container'
			>
				<span className='popup-title'>{title}</span>
				<span className='popup-content'>Author: {source.url}</span>
				<span className='popup-content'>{content}</span>
				<span className='popup-content'>Source: {url}</span>
				<div className='button-popup-container'>
					<button onClick={onClose} className='btnClose'>
						Close
					</button>
				</div>
			</div>
		</>
	);
};

export default PopUp;
