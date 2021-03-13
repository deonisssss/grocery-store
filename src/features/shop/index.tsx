import React from 'react';
import './styles.scss';
import AppleIcon from '@material-ui/icons/Apple';
import { mockedProducts } from '../../utils/mockedProducts';
import { BasicButton } from '../../shared/buttons/basicButton/basicButton';
import { useShopSlice } from './hooks/useShopSlice';

const Shop = () => {
  const { onAddProductToBasket } = useShopSlice();

  const renderProducts = () =>
    mockedProducts.map(product => (
      <div key={product.title} className='Shop-product'>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <div className='Shop-cost-container'>
          Cost: <span className='Shop-cost-container-cost'>{product.cost}$</span>
        </div>
        <BasicButton variant='contained' onClick={() => onAddProductToBasket(product)}>
          Add to Cart 1kg
        </BasicButton>

        {product.discount && (
          <div className='discount'>
            <div>
              Every <span className='count'>{product.discountRange}</span> kg costs{' '}
              <span className='cost'>{product.discount}$</span>
            </div>
          </div>
        )}
      </div>
    ));

  return (
    <div className='Shop'>
      <div className='page-icon'>
        <AppleIcon fontSize='large' />
      </div>

      <div className='Shop-products-container'>{renderProducts()}</div>
    </div>
  );
};

export default Shop;
