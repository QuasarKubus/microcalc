import React, {ChangeEvent, useState} from 'react';
import './App.css';
import { Temperatures } from './components/temperatures';
import { WeightWater } from './components/weightwater';
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
      return 0.60 * 1/(waterPercentage/100) * (weight * 4190 * (dTemp-cTemp))/power;
  }

  return (
    <div className="App">
      <header className="App-header">
        <Power setPower={setPower} />
        <WeightWater setWeight={setWeight} setWaterPercentage={setWaterPercentage} />
        <Temperatures setCTemp={setCTemp} setDTemp={setDTemp} />

        <p>{calculateTime(power, weight, waterPercentage, cTemp, dTemp)}s</p>
      </header>
    </div>
  );
}

export default App;
