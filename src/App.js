import React from 'react';
import './App.scss';
import Home from './components/home/home';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProjectDetail from './components/projectdetail/projectdetail';
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/:projectName">
            <ProjectDetail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
