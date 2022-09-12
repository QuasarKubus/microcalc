import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Layout} from './pages/Layout';
import {Imprint} from './pages/Imprint';
import {Privacy} from './pages/Privacy';
import {Main} from './pages/Main';


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="imprint" element={<Imprint />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
