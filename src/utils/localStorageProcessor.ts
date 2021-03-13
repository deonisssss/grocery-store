import { MockedProduct } from './mockedProducts';

const BASKET = 'BASKET';

class LocalStorageProcessor {
  public setBasket = (basket: Array<MockedProduct>) => {
    localStorage.setItem(BASKET, JSON.stringify(basket));
  };

  public getBasket = () => {
    if (localStorage.getItem(BASKET)) {
      return JSON.parse(localStorage.getItem(BASKET)!);
    } else {
      return [];
    }
  };
}

export const localStorageProcessor = new LocalStorageProcessor();
