import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const COUNTRY_ARTICLES_INITIAL_STATE = {
	currentCountryArticles: [],
	isLoading: false,
	error: null,
};

export const fetchArticlesByCode = createAsyncThunk(
	'country/fetchArticlesByCode',
	async (countryCode) => {
		const API_KEY = '07103288e6b1b6bb6fd0a2c6ecc13899';
		const gnewsAPI = `https://gnews.io/api/v4/top-headlines?category=general&country=${countryCode}&apikey=${API_KEY}`;
		const response = await fetch(gnewsAPI);
		const data = await response.json();
		console.log(data);
		return data;
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
