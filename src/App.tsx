/*
 * Created on Sun Dec 23 2018
 *
 * Copyright (c) 2019 Synsoft Global
 */

// import './App.css';
import 'src/assets/css/material-dashboard-react.css?v=1.2.0';
import * as React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import indexRoutes from 'src/routes/indexRoutes';
import { SnackbarProvider } from 'notistack';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { persistor, store } from 'src/store';


class App extends React.Component {
  public render() {
    return (
      <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'right' }} maxSnack={3}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router>
              <Switch>
                {indexRoutes.map((prop, key) => (
                  <Route path={prop.path} component={prop.component} key={key} />
                ))}
              </Switch>
            </Router>
          </PersistGate>
        </Provider>
      </SnackbarProvider>
    );
  }
}

export default App;
