import './pop-up.styles.scss';

const PopUp = ({ open, onClose, article }) => {
	if (!open) return null;
	const { author, content, url } = article;
	return (
		<div onClick={onClose} className='overlay'>
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}
				className='popup-container'
			>
				<p>POPUP DOES IT WORK?</p>
				<p>{content}</p>
				<p>{author}</p>
				<p>{url}</p>
				<button onClick={onClose} className='btnClose'>
					Close
				</button>
			</div>
		</div>
	);
};

export default PopUp;
