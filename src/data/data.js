export const countriesCodeFromNewsApi = [
	'au',
	'br',
	'ca',
	'cn',
	'eg',
	'fr',
	'de',
	'gr',
	'hk',
	'in',
	'ie',
	'il',
	'it',
	'jp',
	'nl',
	'no',
	'pk',
	'pe',
	'ph',
	'pt',
	'ro',
	'ru',
	'sg',
	'es',
	'se',
	'ch',
	'tw',
	'ua',
	'gb',
	'us',
];

export const countriesCodeFromNewsApiUpperCase = countriesCodeFromNewsApi.map(
	(country) => country.toLocaleUpperCase()
);

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

export const getCountriesNames = async () => {
	try {
		const restCountriesApiNames = await Promise.all(
			countriesCodeFromNewsApi.map((countryCode) =>
				fetchCountryName(countryCode)
			)
		);

		return restCountriesApiNames;
	} catch (error) {
		console.log(error);
		return null;
	}
};
