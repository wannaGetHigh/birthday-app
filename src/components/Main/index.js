import React from 'react';
import './style.css';

import FlipCards from '@core/FlipCards';
import RainbowText from '@core/RainbowText';

const Main = () => {
  
  return (
    <div className='main'>
      <RainbowText text='HPBD Pé' />
      <FlipCards />
    </div>
  )
}

export default Main