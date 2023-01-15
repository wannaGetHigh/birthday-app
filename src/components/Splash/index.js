import React from 'react'

import zeroPrefix from '@utils/zeroPrefix'

import './style.css'
import Balloon from '@core/Balloon';

const MILLISECOND_OF_DAY = 1000 * 60 * 60 * 24;
 
const Splash = ({ timeRemaining }) => {
  const day = Math.floor(timeRemaining / MILLISECOND_OF_DAY);
  const hourLeft = (timeRemaining % MILLISECOND_OF_DAY) / 1000;
  const hour = Math.floor(hourLeft / 3600);
  const minuteLeft = hourLeft % 3600;
  const minute = Math.floor(minuteLeft / 60);
  const second = Math.floor(minuteLeft % 60);

  return (
    <section className="countdown">
      <Balloon />
      <div className="countdown__container">
        <h1 className="countdown__heading">Countdown to Special Day</h1>
        <span className="sr-only" aria-live="polite" data-sr></span>
        <div className="timer" aria-hidden="true">
          <div className={`timer__card ${hour === 0 ? 'running' : ''}`} data-timer-card="days">
            <span className="timer__card-bg"></span>
            <div className="timer__card-part timer__card-part--front" data-timer-front={zeroPrefix(day)} />
            <div className="timer__card-part timer__card-part--back" data-timer-back={zeroPrefix(day - 1)} />
            <span className="timer__card-name">Days</span>
          </div>
          <div className={`timer__card ${minute === 0 ? 'running' : ''}`} data-timer-card="hours">
            <span className="timer__card-bg"></span>
            <div className="timer__card-part timer__card-part--front" data-timer-front={zeroPrefix(hour)} />
            <div className="timer__card-part timer__card-part--back" data-timer-back={zeroPrefix(hour - 1)} />
            <span className="timer__card-name">Hours</span>
          </div>
          <div className={`timer__card ${second === 0 ? 'running' : ''}`} data-timer-card="minutes">
            <span className="timer__card-bg"></span>
            <div className="timer__card-part timer__card-part--front" data-timer-front={zeroPrefix(minute)} />
            <div className="timer__card-part timer__card-part--back" data-timer-back={zeroPrefix(minute - 1)} />
            <span className="timer__card-name">Minutes</span>
          </div>
          <div key={second} className="timer__card running" data-timer-card="seconds">
            <span className="timer__card-bg"></span>
            <div className="timer__card-part timer__card-part--front" data-timer-front={zeroPrefix(second)} />
            <div className="timer__card-part timer__card-part--back" data-timer-back={zeroPrefix(second - 1)} />
            <span className="timer__card-name">Seconds</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Splash