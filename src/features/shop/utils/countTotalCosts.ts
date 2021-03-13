import { MockedProduct } from '../../../utils/mockedProducts';

export const countTotalCosts = (products: Array<MockedProduct>) => {
  products.forEach(product => {
    let totalCost = 0;

    if (product.discount) {
      const countOfSplits = product.count! / product.discountRange!;
      if (countOfSplits > 0) {
        totalCost = product.cost * product.count! - Math.floor(countOfSplits) * product.discount;
      }
    } else {
      totalCost = product.cost * product.count!;
    }

    product.totalCost = totalCost;
  });
};
