import './pop-up.styles.scss';

const PopUp = ({ open, onClose, article }) => {
	if (!open) return null;
	const { source, content, url, title } = article;

	return (
		<div onClick={onClose} className='overlay'>
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}
				className='popup-container'
			>
				<h5>{title}</h5>
				<p>Author: {source.url}</p>
				<p>{content}</p>
				<p>Source: {url}</p>
				<button onClick={onClose} className='btnClose'>
					Close
				</button>
			</div>
		</div>
	);
};

export default PopUp;
