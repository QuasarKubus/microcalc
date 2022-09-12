import React from 'react';
import { Link } from "react-router-dom";

export const MyFooter = () => {

  return (
    <div className="App">
      <Link to='privacy'>Privacy Policy</Link>
      <Link to='imprint'>Imprint</Link>
    </div>
  );
}