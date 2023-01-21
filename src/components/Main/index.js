import React from 'react';
import './style.css';

import IMG_1095 from '@assets/us/IMG_1095.JPG';
import IMG_5616 from '@assets/us/IMG_5616.JPG';
import IMG_5637 from '@assets/us/IMG_5637.JPG';
import IMG_5896 from '@assets/us/IMG_5896.JPG';
import IMG_6068 from '@assets/us/IMG_6068.JPG';
import IMG_E5948 from '@assets/us/IMG_E5948.JPG';

const Main = () => {
  const IMAGES  = [IMG_1095, IMG_5616, IMG_5637, IMG_5896, IMG_6068, IMG_E5948];

  return (
    <section className='main__container'>
        {IMAGES.map(img => (
          <div key={img} className='img__container'>
            <img src={img} alt='Us' />
          </div>
        ))}
    </section>
  )
}

export default Main