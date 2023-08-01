// import { compose, createStore, applyMiddleware } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

// // root-reducer (one big reducer)
import { rootReducer } from './root-reducer';

const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(
	Boolean
);

// const composedEnhancer =
// 	(process.env.NODE_ENV !== 'production' &&
// 		window &&
// 		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
// 	compose;

// const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({}).concat(middleWares),
});
