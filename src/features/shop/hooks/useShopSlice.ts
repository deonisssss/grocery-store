import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '../../../store';
import {
  onAddProductToBasketAction,
  onRemoveProductFromBasketAction,
  onSetBasketFromLocalStorageAction,
  onRemoveProductAllPositionFromBasketAction,
  onCountTotalProductsCostsAction,
  shopSliceType,
} from '../redux/slice';
import { MockedProduct } from '../../../utils/mockedProducts';

export const useShopSlice = () => {
  const splice = useSelector((state: Store) => state.shopSliceReducer);
  const dispatch = useDispatch();

  const onAddProductToBasket = useCallback(
    (product: MockedProduct) => {
      dispatch(onAddProductToBasketAction(product));
    },
    [dispatch]
  );
  const onRemoveProductFromBasket = useCallback(
    (title: string) => {
      dispatch(onRemoveProductFromBasketAction(title));
    },
    [dispatch]
  );
  const onSetBasketFromLocalStorage = useCallback(
    (basket: Array<MockedProduct>) => {
      dispatch(onSetBasketFromLocalStorageAction(basket));
    },
    [dispatch]
  );
  const onRemoveProductAllPositionFromBasket = useCallback(
    (title: string) => {
      dispatch(onRemoveProductAllPositionFromBasketAction(title));
    },
    [dispatch]
  );
  const onCountTotalProductsCosts = useCallback(() => {
    dispatch(onCountTotalProductsCostsAction());
  }, [dispatch]);

  return {
    ...(splice as shopSliceType),
    onAddProductToBasket,
    onRemoveProductFromBasket,
    onSetBasketFromLocalStorage,
    onRemoveProductAllPositionFromBasket,
    onCountTotalProductsCosts,
  };
};
