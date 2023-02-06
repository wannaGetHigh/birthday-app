import { useEffect, useRef, useState } from 'react';

import Splash from '@core/Splash'
import NavBar from '@core/NavBar';
import FlipCards from '@core/FlipCards';
import FoldableCard from '@core/FoldableCard';
import BirthdayGift from '@core/BirthdayGift';
import SlideShow from '@core/SlideShow';

import { FLIP_CARD, FOLDABLE_CARD, BIRTHDAY_GIFT, SLIDE_SHOW } from '@constant';

const D_DAY = new Date(2023, 1, 6, 0, 0, 0);

function App() {
  let timerId = useRef(null);
  const [tab, setTab] = useState(FLIP_CARD)
  const [timeRemaining, setTimeRemaining]  = useState(D_DAY - new Date());

  const Main = () => {
    switch (tab) {
      case FLIP_CARD:
        return FlipCards();
      case FOLDABLE_CARD:
        return FoldableCard();
      case BIRTHDAY_GIFT:
        return BirthdayGift();
      case SLIDE_SHOW:
        return SlideShow();
      default:
        return FlipCards();
    }
  }

  useEffect(() => {
    if (timeRemaining < 0) return;
    
    timerId.current = setTimeout(() => {
      setTimeRemaining(D_DAY - new Date());
    }, 1000)

    return () => clearTimeout(timerId.current);
  }, [timerId.current])

  return (
    <div className="App">
      {timeRemaining < 0 ? <Main /> : <Splash timeRemaining={timeRemaining}/>}
      {timeRemaining < 0 && <NavBar onClick={setTab} />}
    </div>
  );
}

export default App;
