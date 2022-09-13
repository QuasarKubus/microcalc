import React from 'react';
import { Link } from "react-router-dom";

export const MyHeader = () => {
  return (
    <div>
      <div className='Title'>
        <h1><Link to='/'>CalcoWave</Link></h1>
        <h2>Microwave Time Calculator</h2>
      </div>
    </div>
  );
}