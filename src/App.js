import React from 'react';

// Pages
import MainPage from "./pages/Homepage"
import PageNotFound from './pages/PageNotFound'
import About from './pages/About'
import Work from './pages/Work'
import Projects from './pages/Projects'
import Resume from './pages/Resume'

import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/about' component={About} />
        <Route exact path='/work' component={Work} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path="/404" component={PageNotFound} status={404} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
