import React from 'react';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import './styles.scss';

export const Loading = () => {
  return (
    <div className='Loading'>
      <div className='Loading-hourglass'>
        <HourglassEmptyIcon fontSize='large' />
      </div>
    </div>
  );
};
