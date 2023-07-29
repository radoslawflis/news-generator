import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import {
	countriesCodeFromNewsApi,
	countriesCodeFromNewsApiUpperCase,
	getCountriesNames,
} from '../../data/data';

import { setCurrentCountryArticles } from '../../store/country/country.slice';

import './sidebar.styles.scss';
import PopUp from '../pop-up/pop-up.component';

const Sidebar = () => {
	const dispatch = useDispatch();
	const [countriesNames, setCountriesNames] = useState('');
	const [countryCode, setCountryCode] = useState('us');

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
		setCountryCode(code);
	};

	const API_KEY = '07103288e6b1b6bb6fd0a2c6ecc13899';
	const gnewsAPI = `https://gnews.io/api/v4/top-headlines?category=general&country=${countryCode}&apikey=${API_KEY}`;

	useEffect(() => {
		const fetchArticles = async () => {
			try {
				const response = await fetch(gnewsAPI);
				const data = await response.json();

				dispatch(setCurrentCountryArticles(data.articles));
				console.log(data.articles);
			} catch (error) {
				console.log(error);
			}
		};
		fetchArticles();
	}, [countryCode, dispatch]);

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
