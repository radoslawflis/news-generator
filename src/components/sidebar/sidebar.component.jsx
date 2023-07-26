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

	// const sortingNamesAndCode = (countries, codes) => {
	// 	const combinedArray = countries.map((country, index) => {
	// 		const code = codes[index];
	// 		return `${country}&${code}`;
	// 	});
	// 	combinedArray.sort();
	// 	const sortedNames = combinedArray.map((str) => str.split('&')[0]);
	// 	const sortedCode = combinedArray.map((str) => str.split('&')[1]);
	// 	return sortedNames, sortedCode;
	// };

	// console.log(sortingNamesAndCode(countriesNames, countriesCodeFromNewsApi));

	const countriesCodeUpperCase = countriesCodeFromNewsApiUpperCase;

	const API_KEY = 'f18e36d1a9b042d2b575daf90ade4ce7';

	// const urlFetchNews = `https://newsapi.org/v2/top-headlines?country=de&pagesize=100&apiKey=${API_KEY}`;

	const handleFetchingArticles = (code) => {
		setCountryCode(code);
		console.log('clicking');
	};
	// console.log(countryCode);

	useEffect(() => {
		const fetchArticles = async () => {
			try {
				const response = await fetch(
					`https://newsapi.org/v2/top-headlines?country=${countryCode}&pagesize=20&apiKey=${API_KEY}`
				);
				const data = await response.json();
				console.log(data);
				dispatch(setCurrentCountryArticles(data.articles));
			} catch (error) {
				console.log(error);
			}
		};
		fetchArticles();
	}, [countryCode, dispatch]);

	return (
		<ul className='list-container'>
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
										countriesCodeUpperCase[index]
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
	);
};

export default Sidebar;
