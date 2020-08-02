import React, { useState } from 'react';
import GridSection from './components/grid-section/grid-section.component'
import './App.scss';

function App() {
  let [sliderValue, setSliderValue] = useState(0)
  const onFormChange = (value) => {
    setSliderValue(value);
  }
  return (
    <div className="App">
      <div className="Rangebar-Container">
        <input type="range" className="range" name="" defaultValue="3"
          min="1" max="5" onChange={e => onFormChange(e.target.value)}></input>
      </div>

      <div className='grid-section-wrapper'>
        <GridSection sliderNumber={parseInt(sliderValue)}/>
        <GridSection sliderNumber={parseInt(sliderValue)}/>
      </div>
      <div className='grid-section-wrapper'>
        <GridSection sliderNumber={parseInt(sliderValue)}/>
        <GridSection sliderNumber={parseInt(sliderValue)}/>
      </div>
      <div className='grid-section-wrapper'>
        <GridSection sliderNumber={parseInt(sliderValue)}/>
        <GridSection sliderNumber={parseInt(sliderValue)}/>
      </div>
      <div className='grid-section-wrapper'>
        <GridSection sliderNumber={parseInt(sliderValue)}/>
        <GridSection sliderNumber={parseInt(sliderValue)}/>
      </div>
      <div className='grid-section-wrapper'>
        <GridSection sliderNumber={parseInt(sliderValue)}/>
        <GridSection sliderNumber={parseInt(sliderValue)}/>
      </div>

    </div>
  );
}

export default App;
