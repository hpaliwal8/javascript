import { useState } from 'react'
import './App.css';

function App() {
  const [activeBars, setActiveBars] = useState([]);
  const [queuedBars, setQueuedBars] = useState([]);
  const [settledProgressBars, setSettledProgressBars] = useState([]);

  const handleBtnClick = () => {
    const MAX_BARS = 5;
    const newBar = {
      id: Date.now(),
    }
    if(activeBars.length < MAX_BARS) {
      setActiveBars([...activeBars, newBar]);
    } else {
      setQueuedBars([...queuedBars, newBar]);
    }
  }

  const handleProgressBarCompletion = (keyId) => {
    setSettledProgressBars([...settledProgressBars, activeBars[0]]);
    const newActiveBars = [...activeBars.slice(1)];
    if(queuedBars.length > 0) {
      newActiveBars.push(queuedBars[0]);
    }
    const newQueuedBars = [...queuedBars.slice(1)];

    setActiveBars(newActiveBars);
    setQueuedBars(newQueuedBars);
  }

  return (
    <>
      <div>
        <button onClick={() => handleBtnClick()}> Add progress bar </button>
        <h1>Queued bars: {queuedBars.length}</h1>
        <h1>Settled bars: {settledProgressBars.length} </h1>
        <div>
          { activeBars.length > 0 &&
            activeBars.map((bar) => (
              <div key={bar.id} className='progress-bar' onAnimationEnd={() => handleProgressBarCompletion(bar.id)}>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
