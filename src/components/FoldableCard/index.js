import React from 'react';

import SparklingStar from '@core/SparklingStar';
import styles from './styles.module.css'
import EmImg from '@assets/img/point.png'
import AnhImg from '@assets/img/ple.png'

const FoldableCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.birthdayCard}>
            <div className={styles.cardFront}>
                <SparklingStar>
                    <h3 className={styles.happy}>HAPPY BIRTHDAY!</h3>
                </SparklingStar>
                <div className={styles.balloons}>
                <div className={styles.balloonOne}></div>
                <div className={styles.balloonTwo}></div>
                <div className={styles.balloonThree}></div>
                <div className={styles.balloonFour}></div>
            </div>
            <div className={styles.animatedContainer}>
                <div className={styles.animatedImg}>
                    <img src={EmImg} width={100} alt='Em' fetchpriority='high' />
                </div>
                <div className={styles.animatedImg}>
                    <img src={AnhImg} width={120} alt='Anh' fetchpriority='high' />
                </div>
            </div>
            </div>
            <div className={styles.cardInside}>
                <h3 className={styles.back}>06-02-2023,<br/>FANCY 24<sup>th</sup> BIRTHDAY!</h3>
                <p>Gửi em dễ thương,</p>
                <p>Chúc mừng sinh nhật tới cô gái đáng yêu!</p>
                <p>Một chặng đường mới phía trước đang chờ đón em. Anh chúc em luôn dễ thương, xinh gái như tuổi 18 và đặc biệt là có thật nhiều niềm vui bên cạnh anh.</p>
                <p className={styles.name}>Ký tên <br /> <strong>Anh</strong></p>
            </div>
        </div>
    </div>
  )
}

export default FoldableCard