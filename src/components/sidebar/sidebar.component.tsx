import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import {
  countriesCodeFromNewsApi,
  countriesCodeFromNewsApiUpperCase,
  getCountriesNames,
} from '../../data/data';

import { fetchArticlesByCode } from '../../store/country/country.slice';
import { useAppDispatch } from '../../store/store';

import './sidebar.styles.scss';
import { CountryName } from '../../data/data';

type CountriesNamesType = (CountryName | null)[] 



const Sidebar = () => {
  const dispatch = useAppDispatch();
  // const dispatch = useDispatch();
  const [countriesNames, setCountriesNames] = useState<string[]>([]);
  
  useEffect(() => {
    const fetchCountriesNames = async () => {
      try {
        const names = await getCountriesNames();
        if(names) {
          setCountriesNames(names as string[]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountriesNames();
  }, []);

  const countriesCodeUpperCase = countriesCodeFromNewsApiUpperCase;
  const countriesCodeLowerCase = countriesCodeFromNewsApi;

  const handleFetchingArticles = (code: string) => {
    dispatch(fetchArticlesByCode(code));
  };

  return (
    <>
      <ul className='sidebar-list-container'>
        <span className='sidebar-header'>Choose country:</span>
        <hr />
        {countriesNames &&
          countriesNames.map((country, index) => (
            <li key={index}>
              <Link to={`/country/${country}`}>
                <div className='flag-container'>
                  <img
                    key={index}
                    // src={`https://www.countryflagicons.com/SHINY/64/${countriesCodeUpperCase[index]}.png`}
                    src={`https://flagsapi.com/${countriesCodeUpperCase[index]}/shiny/64.png`}
                  ></img>
                  <span
                    className='country-name'
                    onClick={() =>
                      handleFetchingArticles(countriesCodeLowerCase[index])
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
