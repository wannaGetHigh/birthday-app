import React from 'react'

import IMG_1095 from '@assets/us/IMG_1095.JPG';
import IMG_5616 from '@assets/us/IMG_5616.JPG';
import IMG_5637 from '@assets/us/IMG_5637.JPG';
import IMG_5896 from '@assets/us/IMG_5896.JPG';
import IMG_6068 from '@assets/us/IMG_6068.JPG';
import IMG_E5948 from '@assets/us/IMG_E5948.JPG';
import FlipCard from './FlipCard'
import styles from './styles.module.css'

const IMAGES  = [{ 
  src: IMG_1095,
  message: 'Chúc mừng kỷ niệm 10 năm của hai đứa. Trông mình thiệt là dễ thương' 
},
{
  src: IMG_5616,
  message: 'Sinh nhật anh rùi sinh nhật em. Chúc em luôn xink như trong hình nhó' 
},
{
  src: IMG_5637,
  message: 'Trông em rất đáng iu. Chúc em luôn vui vẻ và đáng iu' 
},
{
  src: IMG_5896,
  message: 'Giáng sinh 2023. Mong sẽ có 2024 và nhiều cái về sau nữa' 
},
{
  src: IMG_6068,
  message: 'Hai đứa mình trốn việc đi chơi. Tóc em lên màu nhìn đẹp nhó' 
},
{
  src: IMG_E5948,
  message: 'Pé đáng iu và supa cute. Chúc em sinh nhật luôn đẹp gái'
}]

const FlipCards = () => {
  return (
    <section className={styles.main__container}>
      {IMAGES.map(img => (
        <div key={img.src} className={styles.img__container}>
          <FlipCard imgSrc={img.src} message={img.message}/>
        </div>
      ))}      
    </section>
  )
}

export default FlipCards