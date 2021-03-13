import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { shopSliceReducer } from '../features/shop/redux/slice';

const reducer = combineReducers({
  shopSliceReducer,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export type Store = ReturnType<typeof reducer>;
