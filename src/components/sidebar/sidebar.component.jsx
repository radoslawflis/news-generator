import { useEffect, useState } from 'react';
import {
	countriesFromNewsApi,
	countriesFromNewsApiUpperCase,
} from '../../data/data';

import './sidebar.styles.scss';

const Sidebar = () => {
	const [countriesNames, setCountriesNames] = useState('');

	useEffect(() => {
		const fetchCountryName = async (code) => {
			try {
				const response = await fetch(
					`https://restcountries.com/v3.1/alpha/${code}`
				);
				const data = await response.json();
				return data[0].name.common;
			} catch (error) {
				console.log(error);
				return null;
			}
		};

		const getCountriesNames = async () => {
			try {
				const restCountriesApiNames = await Promise.all(
					countriesFromNewsApi.map((countryCode) =>
						fetchCountryName(countryCode)
					)
				);

				setCountriesNames(restCountriesApiNames);
			} catch (error) {
				console.log(error);
			}
		};

		getCountriesNames();
	}, []);

	console.log(countriesNames);

	const API_KEY = 'f18e36d1a9b042d2b575daf90ade4ce7';
	const countriesCodeUpperCase = countriesFromNewsApiUpperCase;
	console.log(countriesCodeUpperCase[0]);
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
							<h3 className='country-name'>{country}</h3>
						</div>
					</li>
				))}
		</ul>
	);
};

export default Sidebar;
