import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Players from './Players';
import Teams from './Teams';

const App = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/players" component={Players} />
      <Route path="/teams" component={Teams} />
    </div>
  </BrowserRouter>
);

export default App;
