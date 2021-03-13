import React from 'react';
import './styles.scss';
import { useShopSlice } from '../shop/hooks/useShopSlice';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { BasicButton } from '../../shared/buttons/basicButton/basicButton';

const Basket = () => {
  const {
    basket,
    onAddProductToBasket,
    onRemoveProductFromBasket,
    onRemoveProductAllPositionFromBasket,
  } = useShopSlice();

  const renderBasketProducts = () =>
    basket
      .slice()
      .sort(function (a, b) {
        return a.title.localeCompare(b.title);
      })
      .map(product => (
        <div className='product' key={product.title}>
          <div className='title'>
            <img src={product.image} alt={product.title} />
            {product.title} = <span className='common-cost'>{product.totalCost}$</span>
          </div>

          <div className='count'>
            <div className='value'>{product.count}kg</div>

            <BasicButton
              variant='outlined'
              className='remove-button'
              onClick={() => onRemoveProductFromBasket(product.title)}
            >
              <RemoveIcon />
            </BasicButton>

            <BasicButton variant='outlined' className='add-button' onClick={() => onAddProductToBasket(product)}>
              <AddIcon />
            </BasicButton>

            <BasicButton className='remove-product' onClick={() => onRemoveProductAllPositionFromBasket(product.title)}>
              <HighlightOffIcon fontSize='small' />
            </BasicButton>
          </div>
        </div>
      ));

  const commonTotalCost = () => basket.reduce((accumulator, currentValue) => accumulator + currentValue.totalCost!, 0);

  return (
    <div className='Basket'>
      <div className='page-icon'>
        <ShoppingBasketIcon fontSize='large' />
      </div>

      {renderBasketProducts()}

      <div className='common-total-cost'>
        {basket.length ? (
          <div>
            Total cost: <span>{commonTotalCost()}$</span>
          </div>
        ) : (
          'Your basket is empty.'
        )}
      </div>
    </div>
  );
};

export default Basket;
