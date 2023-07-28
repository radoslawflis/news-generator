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

	// console.log(sortingNamesAndCode(countriesNames, countriesCodeFromNewsApi));

	const countriesCodeUpperCase = countriesCodeFromNewsApiUpperCase;
	const countriesCodeLowerCase = countriesCodeFromNewsApi;

	// const API_KEY = 'f18e36d1a9b042d2b575daf90ade4ce7';

	// const urlFetchNews = `https://newsapi.org/v2/top-headlines?country=de&pagesize=100&apiKey=${API_KEY}`;

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
				<h3>Choose country:</h3>
				<hr />
				{countriesNames &&
					countriesNames.map((country, index) => (
						<li key={country}>
							<div className='flag-container'>
								<img
									key={country}
									src={`https://www.countryflagicons.com/SHINY/64/${countriesCodeUpperCase[index]}.png`}
								></img>
								<h3
									className='country-name'
									onClick={() =>
										handleFetchingArticles(
											countriesCodeLowerCase[index]
										)
									}
								>
									<Link to={`/country/${country}`}>
										{country}
									</Link>
								</h3>
							</div>
						</li>
					))}
			</ul>
		</>
	);
};

export default Sidebar;
