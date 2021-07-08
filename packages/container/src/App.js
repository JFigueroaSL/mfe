import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import MarketingApp from './components/MarketingApp';

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
