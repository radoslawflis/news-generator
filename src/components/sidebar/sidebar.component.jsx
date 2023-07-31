import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import {
	countriesCodeFromNewsApi,
	countriesCodeFromNewsApiUpperCase,
	getCountriesNames,
} from '../../data/data';

import { fetchArticlesByCode } from '../../store/country/country.slice';

import './sidebar.styles.scss';

const Sidebar = () => {
	const dispatch = useDispatch();
	const [countriesNames, setCountriesNames] = useState('');

	useEffect(() => {
		const fetchCountriesNames = async () => {
			try {
				const names = await getCountriesNames();
				setCountriesNames(names);
			} catch (error) {
				console.log(error);
			}
		};
		fetchCountriesNames();
	}, []);

	const countriesCodeUpperCase = countriesCodeFromNewsApiUpperCase;
	const countriesCodeLowerCase = countriesCodeFromNewsApi;

	const handleFetchingArticles = (code) => {
		dispatch(fetchArticlesByCode(code));
	};

	return (
		<>
			<ul className='sidebar-list-container'>
				<span className='sidebar-header'>Choose country:</span>
				<hr />
				{countriesNames &&
					countriesNames.map((country, index) => (
						<li key={country}>
							<Link to={`/country/${country}`}>
								<div className='flag-container'>
									<img
										key={country}
										src={`https://www.countryflagicons.com/SHINY/64/${countriesCodeUpperCase[index]}.png`}
									></img>
									<span
										className='country-name'
										onClick={() =>
											handleFetchingArticles(
												countriesCodeLowerCase[index]
											)
										}
									>
										{country}
									</span>
								</div>
							</Link>
						</li>
					))}
			</ul>
		</>
	);
};

export default Sidebar;
