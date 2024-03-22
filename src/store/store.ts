// import { compose, createStore, applyMiddleware } from 'redux';
import { configureStore, getDefaultMiddleware, Middleware, Dispatch, AnyAction} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import logger from 'redux-logger';

// // root-reducer (one big reducer)
import { rootReducer } from './root-reducer';

// const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(
// 	Boolean
// );
const middleWares = [process.env.NODE_ENV !== 'production' ? logger : null]
	.filter((middleware => middleware !== null)) as Middleware<{}, any, Dispatch<AnyAction>>[];

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

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch