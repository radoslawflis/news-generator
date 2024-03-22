import ReactDom from 'react-dom';

import './pop-up.styles.scss';
import { Article } from '../../store/country/country.slice';

type PopUpProps = {
	open: boolean;
	onClose: () => void;
	article: Article;
}

const PopUp = ({ open, onClose, article }: PopUpProps) => {
	if (!open) return null;
	const { source, content, url, title } = article;

	return ReactDom.createPortal(
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
		</>,
		document.getElementById('portal') as HTMLElement
	);
};

export default PopUp;
