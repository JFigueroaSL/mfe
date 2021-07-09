import React, { useEffect, useState } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Dashboard from './components/Dashboard';

const generateClassName = createGenerateClassName({
  productionPrefix: 'da',
});

export default ({ history }) => {
  const [images, setImages] = useState();

  useEffect(() => {
    setImages(
      Array.from(Array(10).keys()).map((id) => ({
        id,
        url: `https://picsum.photos/1000?random=${id}`,
      }))
    );
  }, []);

  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/">
              <Dashboard images={images} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
