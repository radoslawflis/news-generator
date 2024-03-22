import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export type Article = {
	title: string;
	description: string;
	content: string;
	url: string;
	image: string;
	publishedAt: string;
	source: {
	  name: string;
	  url: string;
	};
  }

export type ArticlesResponse = {
	totalArticles: number;
	articles: Article[]
}

// export type CountryArticlesState = {
// 	currentCountryArticles: Article[];
// 	isLoading: boolean;
// 	error: string | undefined;
// }
export type CountryArticlesState = {
	totalArticles: number;
	currentCountryArticles: ArticlesResponse;
	isLoading: boolean;
	error: string | undefined;
}

// export const COUNTRY_ARTICLES_INITIAL_STATE: CountryArticlesState = {
// 	totalArticles: 0,
// 	currentCountryArticles: [],
// 	isLoading: false,
// 	error: undefined,
// };
export const COUNTRY_ARTICLES_INITIAL_STATE: CountryArticlesState = {
	totalArticles: 0,
	currentCountryArticles: {} as ArticlesResponse,
	isLoading: false,
	error: undefined,
};

export const fetchArticlesByCode = createAsyncThunk(
	'country/fetchArticlesByCode',
	async (countryCode: string): Promise<ArticlesResponse> => {
		const API_KEY = '07103288e6b1b6bb6fd0a2c6ecc13899';
		const gnewsAPI = `https://gnews.io/api/v4/top-headlines?category=general&country=${countryCode}&apikey=${API_KEY}`;
		const response = await fetch(gnewsAPI);
		const data = await response.json();
		console.log(data);
		return data as ArticlesResponse;
	}
);

export const countryArticlesSlice = createSlice({
	name: 'country',
	initialState: COUNTRY_ARTICLES_INITIAL_STATE,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchArticlesByCode.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchArticlesByCode.fulfilled, (state, action) => {
			state.isLoading = false;
			state.currentCountryArticles = action.payload;
		});
		builder.addCase(fetchArticlesByCode.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error.message;
		});
	},
});

// export const { setCurrentCountryArticles } = countryArticlesSlice.actions;

export const countryArticlesReducer = countryArticlesSlice.reducer;
