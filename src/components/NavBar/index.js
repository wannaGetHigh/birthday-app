import React from 'react';

import HiImg from '@assets/img/hi.png';
import FlirtImg from '@assets/img/flirt.png';
import ThinkImg from '@assets/img/think.png';
import LieImg from '@assets/img/lie.png';

import styles from './styles.module.css';

const NavBar = () => {
  return (
    <nav className={styles.btn_wrap}>
      <span>For you</span>
      <div className={styles.container}>
          <img src={HiImg} alt='wow' />
          <img src={FlirtImg} alt='flirt' />
          <img src={LieImg} alt='lie' />
          <img src={ThinkImg} alt='think' />
      </div>
    </nav>
  )
}

export default NavBar