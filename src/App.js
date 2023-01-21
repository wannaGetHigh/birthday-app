import { useEffect, useRef, useState } from 'react';

import Splash from '@core/Splash'
import Main from '@core/Main';

const D_DAY = new Date(2023, 1, 6, 0, 0, 0);

function App() {
  let timerId = useRef(null);
  const [timeRemaining, setTimeRemaining]  = useState(D_DAY - new Date());

  useEffect(() => {
    timerId.current = setTimeout(() => {
      setTimeRemaining(D_DAY - new Date());
    }, 1000)

    return () => clearTimeout(timerId.current);
  }, [timerId.current])

  return (
    <div className="App">
      {timeRemaining < 0 ? <Main /> : <Splash timeRemaining={timeRemaining}/>}
    </div>
  );
}

export default App;
