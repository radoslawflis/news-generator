export const countriesFromNewsApi = [
	'ae',
	'ar',
	'at',
	'au',
	'be',
	'bg',
	'br',
	'ca',
	'ch',
	'cn',
	'co',
	'cu',
	'cz',
	'de',
	'eg',
	'fr',
	'gb',
	'gr',
	'hk',
	'hu',
	'id',
	'ie',
	'il',
	'in',
	'it',
	'jp',
	'kr',
	'lt',
	'lv',
	'ma',
	'mx',
	'my',
	'ng',
	'nl',
	'no',
	'nz',
	'ph',
	'pl',
	'pt',
	'ro',
	'rs',
	'ru',
	'sa',
	'se',
	'sg',
	'si',
	'sk',
	'th',
	'tr',
	'tw',
	'ua',
	'us',
	've',
	'za',
];

export const countriesFromNewsApiUpperCase = countriesFromNewsApi.map(
	(country) => country.toLocaleUpperCase()
);

// export const countriesNames = countriesFromApi.map((countryCode)=>`https://restcountries.com/v3.1/alpha/${countryCode}` ) take out only name.common

// https://restcountries.com/v3.1/alpha/de Example

const urlRestCountries = 'https://restcountries.com/v3.1/all';

// export const restCountriesApiNames = countriesFromNewsApi.map((countryCode) => {
// 	return fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
// 		.then((response) => response.json())
// 		.then((data) => data.name.common)
// 		.catch((error) => console.log(error));
// });

// export const justName = fetch(
// 	`https://restcountries.com/v3.1/alpha/${countriesFromNewsApi[0]}`
// )
// 	.then((response) => response.json())
// 	.then((data) => data.name)
// 	.catch((error) => console.log(error));

// export const restCountriesAPI = fetch(urlRestCountries)
// 	.then((response) => response.json())
// 	.then((data) => {
// 		console.log(data);
// 		return data;
// 	})
// 	.catch((error) => console.log(error));
