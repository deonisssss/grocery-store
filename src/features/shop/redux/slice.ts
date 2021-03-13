import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MockedProduct } from '../../../utils/mockedProducts';
import { localStorageProcessor } from '../../../utils/localStorageProcessor';
import { countTotalCosts } from '../utils/countTotalCosts';

const INITIAL_STATE = {
  basket: [] as Array<MockedProduct>,
};

export type shopSliceType = typeof INITIAL_STATE;

const shopSlice = createSlice({
  name: 'ShopSliceReducer',
  initialState: INITIAL_STATE,
  reducers: {
    onAddProductToBasketAction: (state, payload: PayloadAction<MockedProduct>) => {
      const searchableProduct = state.basket.find(product => product.title === payload.payload.title);

      searchableProduct ? (searchableProduct.count! += 1) : state.basket.push({ ...payload.payload, count: 1 });

      countTotalCosts(state.basket);

      localStorageProcessor.setBasket(state.basket);
    },
    onRemoveProductFromBasketAction: (state, payload: PayloadAction<string>) => {
      const searchableProduct = state.basket.find(product => product.title === payload.payload);

      if (searchableProduct) {
        if (searchableProduct.count === 1) {
          state.basket = state.basket.filter(product => product.title !== searchableProduct.title);
        } else {
          searchableProduct.count! -= 1;
        }
      }

      countTotalCosts(state.basket);

      localStorageProcessor.setBasket(state.basket);
    },
    onSetBasketFromLocalStorageAction: (state, payload: PayloadAction<Array<MockedProduct>>) => {
      state.basket = payload.payload;
      countTotalCosts(state.basket);
    },
    onRemoveProductAllPositionFromBasketAction: (state, payload: PayloadAction<string>) => {
      state.basket = state.basket.filter(product => product.title !== payload.payload);
      localStorageProcessor.setBasket(state.basket);
    },
    onCountTotalProductsCostsAction: state => {
      countTotalCosts(state.basket);
    },
  },
});

export const shopSliceReducer = shopSlice.reducer;
export const {
  onAddProductToBasketAction,
  onRemoveProductFromBasketAction,
  onSetBasketFromLocalStorageAction,
  onRemoveProductAllPositionFromBasketAction,
  onCountTotalProductsCostsAction,
} = shopSlice.actions;
