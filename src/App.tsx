import React, {ChangeEvent, useState} from 'react';
import { DesiredTemp } from './components/desiredTemp';
import { CurrentTemp } from './components/currentTemp';
import { Weight } from './components/weight';
import { WaterPercentage } from './components/waterPercentage';
import { Power } from './components/power';

const App = () => {

  const [power, setPower] = useState(0);
  const [weight, setWeight] = useState(0);
  const [waterPercentage, setWaterPercentage] = useState(0);
  const [cTemp, setCTemp] = useState(0);
  const [dTemp, setDTemp] = useState(0);
  
  const calculateTime = (
    power: number,
    weight: number,
    waterPercentage: number,
    cTemp: number, 
    dTemp: number) => {
      return 0.60 * 1/(waterPercentage/100) * ((weight/1000) * 4190 * (dTemp-cTemp))/power;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div id='calcContainer'>
          <div className='Title'>
            <h1>MicroCalc</h1>
            <h3>Microwave Time Calculator</h3>
          </div>
          <div id='inputContainer'>
            <Power power={power} setPower={setPower} />
            <Weight weight={weight} setWeight={setWeight} />
            <WaterPercentage waterPercentage={waterPercentage} setWaterPercentage={setWaterPercentage} />
            <CurrentTemp cTemp={cTemp} setCTemp={setCTemp} />
            <DesiredTemp  dTemp={dTemp} setDTemp={setDTemp} />
          </div>
          <h1>{calculateTime(power, weight, waterPercentage, cTemp, dTemp).toFixed(0)}s</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
