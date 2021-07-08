import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Components/Header';
import MarketingApp from './Components/MarketingApp';

export default () => {
  return (
    <BrowserRouter>
      <div>
        <h1>New Test</h1>
        <Header />
        <MarketingApp />;
      </div>
    </BrowserRouter>
  );
};
