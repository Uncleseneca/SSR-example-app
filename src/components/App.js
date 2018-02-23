import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';

import DynamicImport from './DynamicImport';

const Players = props => <DynamicImport componentPath="./Players" {...props} />;
const Teams = props => <DynamicImport componentPath="./Teams" {...props} />;
const TeamPage = props => <DynamicImport componentPath="./TeamPage" {...props} />;
const Articles = props => <DynamicImport componentPath="./Articles" {...props} />;

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
