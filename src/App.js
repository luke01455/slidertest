import React, { useState } from 'react';
import GridSection from './components/grid-section/grid-section.component'
import './App.scss';

function App() {
  let [sliderValue, setSliderValue] = useState(0)
  const [randomValues, setRandomValues] = useState([])
  let [coinFlip, setCoinFlip] = useState(0)

  const onFormChange = (value) => {
    setCoinFlip(Math.floor((Math.random() * 2) + 1))
      setSliderValue(value);
      setRandomValues([])
      for(let i = 0; i < 10; i++) {
        setRandomValues(randomValues => [...randomValues,(Math.floor((Math.random() * 5) + 1))])
      }
  }
  
  return (
    <div className="App">
      <div className="Rangebar-Container">
        <input type="range" className="range" name="" defaultValue="3"
          min="1" max="5" onChange={e => onFormChange(e.target.value)}></input>
      </div>

      <div className='grid-section-wrapper'>
        <GridSection sliderNumber={parseInt(coinFlip === 1 ? sliderValue : randomValues[1])}/>
        <GridSection sliderNumber={parseInt(coinFlip === 1 ? sliderValue : randomValues[2])}/>
      </div>
      <div className='grid-section-wrapper'>
        <GridSection sliderNumber={parseInt(coinFlip === 1 ? sliderValue : randomValues[3])}/>
        <GridSection sliderNumber={parseInt(coinFlip === 1 ? sliderValue : randomValues[4])}/>
      </div>
      <div className='grid-section-wrapper'>
        <GridSection sliderNumber={parseInt(coinFlip === 1 ? sliderValue : randomValues[5])}/>
        <GridSection sliderNumber={parseInt(coinFlip === 1 ? sliderValue : randomValues[6])}/>
      </div>
      <div className='grid-section-wrapper'>
        <GridSection sliderNumber={parseInt(coinFlip === 1 ? sliderValue : randomValues[7])}/>
        <GridSection sliderNumber={parseInt(coinFlip === 1 ? sliderValue : randomValues[8])}/>
      </div>
      <div className='grid-section-wrapper'>
        <GridSection sliderNumber={parseInt(coinFlip === 1 ? sliderValue : randomValues[9])}/>
        <GridSection sliderNumber={parseInt(coinFlip === 1 ? sliderValue : randomValues[0])}/>
      </div>

    </div>
  );
}

export default App;
