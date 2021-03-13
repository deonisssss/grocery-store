import bananaImage from '../assets/images/banana.png';
import appleImage from '../assets/images/apple.png';
import papayaImage from '../assets/images/papaya.png';

export type MockedProduct = {
  title: string;
  image: string;
  cost: number;
  count?: number;
  discount?: number;
  discountRange?: number;
  totalCost?: number;
};

export const mockedProducts: Array<MockedProduct> = [
  {
    title: 'Banana',
    image: bananaImage,
    cost: 10,
  },
  {
    title: 'Apple',
    image: appleImage,
    cost: 8,
  },
  {
    title: 'Papaya',
    image: papayaImage,
    cost: 10,
    discount: 5,
    discountRange: 3,
  },
];
