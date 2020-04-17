import React, { useState } from 'react';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Settings from './Pages/Settings/Settings';
import Archive from './Pages/Archive/Archive';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { SettingsProvider } from './Context/SettingsContext'
import { SaveArticleProvider } from './Context/SaveArticleContext'

const App: React.FC = () => {
  return (
    <Router>
      <>
        <Header />

        <Switch>
          <SettingsProvider>
            <SaveArticleProvider>
              <Route path="/archive" exact render={(props) => <Archive {...props} />} />
              <Route path='/' exact render={(props) => <Home {...props} />} />
              <Route path='/settings' exact render={(props) => <Settings {...props} />} />
            </SaveArticleProvider>
          </SettingsProvider>
        </Switch>

        <Footer />

      </>
    </Router >
  );
}

export default App;