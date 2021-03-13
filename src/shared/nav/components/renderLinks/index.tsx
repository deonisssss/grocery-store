import React, { FC } from 'react';
import { links } from '../../utils/links';
import { NavLink } from '../../ts';
import { Buttons } from '../../../buttons';
import './styles.scss';
import { useShopSlice } from '../../../../features/shop/hooks/useShopSlice';

type Props = {
  closeMobileNav?: () => void;
};

export const RenderLinks: FC<Props> = props => {
  const { closeMobileNav } = props;
  const { basket } = useShopSlice();

  const renderBasketCount = () => {
    if (basket.length) {
      const commonCount = basket.reduce((accumulator, currentValue) => accumulator + currentValue.count!, 0);

      return <div className='basket-count'>{commonCount}</div>;
    } else return null;
  };

  const renderLink = (link: NavLink) => {
    return (
      <li key={`renderLinks-${link.title}`} onClick={closeMobileNav}>
        <Buttons.BasicButton
          to={link.to}
          href={link.href}
          hrefProps={{ target: '_blank' }}
          variant='outlined'
          slider={link.title}
        >
          {link.icon}
        </Buttons.BasicButton>

        {link.title === 'Basket' && renderBasketCount()}
      </li>
    );
  };

  return <ul className='RenderLinks'>{links.map(renderLink)}</ul>;
};
