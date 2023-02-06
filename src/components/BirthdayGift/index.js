import React, { useState, useEffect } from 'react';
import Confetti from '@core/Confetti';

import styles from './styles.module.css'
import TypingText from '@core/TypingText';

const BirthdayGift = () => {
    const [audio] = useState(new Audio('https://cdn.pixabay.com/audio/2022/01/11/audio_4098a3628e.mp3'));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        audio.currentTime = 0;
        playing ? audio.play() : audio.pause();

        return () => audio.pause();
    }, [playing]);

    return (
        <div className={styles.container}>
            <section className={styles["birthday-gift"]}>
                <div className={styles.gift}>
                    <input id={styles.click} type='checkbox' />
                    <label onClick={toggle} className={styles.click} htmlFor={styles.click}></label>
                    <div className={styles.wishes}>
                        {playing && <Confetti text='Wish you best wishes 🎂🎂🎂' className={styles.text} />}
                    </div>
                    <div className={styles.sparkles}>
                    <div className={styles.spark1}></div>
                    <div className={styles.spark2}></div>
                    <div className={styles.spark3}></div>
                    <div className={styles.spark4}></div>
                    <div className={styles.spark5}></div>
                    <div className={styles.spark6}></div>
                    </div>
                </div>
            </section>
            {playing && <TypingText text='You are a adorable girl, always smiling and I wish you can keep up all that. Stay strong, optimistic and be exquisite. Fancy 24th Birthday.' />}
        </div>
    )
}

export default BirthdayGift