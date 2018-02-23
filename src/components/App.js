import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Players from './Players';
import Teams from './Teams';
import TeamPage from './TeamPage';
import Articles from './Articles';

const App = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/players" component={Players} />
        <Route path="/teams" component={Teams} />
        <Route exact path="/:teamId" component={TeamPage} />
        <Route path="/:teamId/articles" component={Articles} />
        <Route render={() => <h1 className="text-center"> Four oh Four </h1>} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
