import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import classnames from 'classnames';
import './styles.scss';

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
  loading?: boolean;
  loadingText?: string;
  to?: LinkProps['to'];
  href?: HTMLAnchorElement['href'];
  linkProps?: Omit<LinkProps, 'to'>;
  hrefProps?: Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;
  variant?: 'outlined' | 'contained' | 'primary' | '';
  slider?: string;
};

export const BasicButton: React.FC<Props> = ({
  to,
  variant = '',
  disabled,
  loading,
  loadingText = 'Loading',
  href,
  children,
  hrefProps,
  linkProps,
  className,
  active,
  type = 'button',
  slider,
  ...props
}) => {
  const classes = classnames('BasicButton', className, { active }, variant);
  const linkClasses = classnames('BasicButton-link', linkProps?.className);

  const renderButton = (tabIndex?: number) => (
    <button tabIndex={tabIndex} className={classes} type={type} disabled={disabled || loading} {...props}>
      {loading ? loadingText : children}
      {slider && <div className='BasicButton-slider'>{slider}</div>}
    </button>
  );

  return to ? (
    <Link to={to} className={linkClasses} {...linkProps}>
      {renderButton(-1)}
    </Link>
  ) : href ? (
    <a href={href} className={linkClasses} {...hrefProps}>
      {renderButton(-1)}
    </a>
  ) : (
    renderButton()
  );
};
