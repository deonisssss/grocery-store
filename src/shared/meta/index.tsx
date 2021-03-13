import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

type Props = {
  title: string;
  description?: string;
};

export const Meta: FC<Props> = props => {
  const { title, description } = props;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
    </Helmet>
  );
};
