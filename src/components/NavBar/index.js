import React from 'react';

import HiImg from '@assets/img/hi.png';
import FlirtImg from '@assets/img/flirt.png';
import ThinkImg from '@assets/img/think.png';
import LieImg from '@assets/img/lie.png';

import { FLIP_CARD, FOLDABLE_CARD, BIRTHDAY_GIFT, SLIDE_SHOW } from '@constant';
import styles from './styles.module.css';

const NavBar = ({ onClick }) => {
  const handleClick = (e) => {
    onClick(e.target.dataset.tab)
  }

  return (
    <nav className={styles.btn_wrap}>
      <span>For you</span>
      <div className={styles.container}>
        <img data-tab={FLIP_CARD} src={HiImg} alt='wow' onClick={handleClick} />
        <img data-tab={FOLDABLE_CARD} src={FlirtImg} alt='flirt' onClick={handleClick} />
        <img data-tab={BIRTHDAY_GIFT} src={LieImg} alt='lie' onClick={handleClick} />
        <img data-tab={SLIDE_SHOW} src={ThinkImg} alt='think' onClick={handleClick} />
      </div>
    </nav>
  )
}

export default NavBar