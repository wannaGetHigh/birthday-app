import React from 'react';

import RainbowText from '@core/RainbowText'

import IMG_1095 from '@assets/us/IMG_1095.JPG';
import IMG_5616 from '@assets/us/IMG_5616.JPG';
import IMG_5896 from '@assets/us/IMG_5896.JPG';
import IMG_6068 from '@assets/us/IMG_6068.JPG';
import IMG_E5948 from '@assets/us/IMG_E5948.JPG';
import IMG_6347 from '@assets/us/IMG_6347.JPG';
import IMG_6435 from '@assets/us/IMG_6435.JPG';
import IMG_US from '@assets/us/us.png'
import FlipCard from './FlipCard'
import styles from './styles.module.css'

const IMAGES  = [{ 
    src: IMG_1095,
    message: 'Chúc mừng kỷ niệm 10 năm của hai đứa. Trông mình thiệt là dễ thương.' 
  },
  {
    src: IMG_5616,
    message: 'Chỉ biết cám ơn em thiệt nhiều. Khi mình bên nhau anh chẳng muốn ở bất kì nơi nào khác nữa.' 
  },
  {
    src: IMG_6347,
    message: 'Trông em rất đáng iu. Chúc em luôn ✨ vui vẻ và đáng iu ✨' 
  },
  {
    src: IMG_5896,
    message: 'Anh mặc áo vàng là tông sẹc tông zới em rùi. Chúc cho em luôn vàng tươi như bộ đồ em zậy ✨✨✨' 
  },
  {
    src: IMG_6068,
    message: 'Lần đầu nhuộm tóc. Chúc cho hành trình phía trước luôn xịn như tóc của em.' 
  },
  {
    src: IMG_E5948,
    message: 'Pé đáng iu và supa cute. Chúc em sinh nhật luôn đẹp gái'
  },
  {
    src: IMG_6435,
    message: 'Thiệt là một good day. Chúc cho em có 365 ngày như zậy'
  },
  {
    src: IMG_US,
    message: 'Chúc cho tụi mình luôn vui vẻ và hạnh phúc!!!'
  },
]

const FlipCards = () => {
  return (
    <div className={styles.main}>
      <RainbowText text='HPBD to Pé' />
      <section className={styles.main__container}>
        {IMAGES.map(img => (
          <div key={img.src} className={styles.img__container}>
            <FlipCard imgSrc={img.src} message={img.message}/>
          </div>
        ))}      
      </section>
    </div>
  )
}

export default FlipCards