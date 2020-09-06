import * as React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import Search from './containers/Search';
import Home from './containers/Home';
import Details from './containers/Details';

function App() {
  return (
    <Router>
      <Home path="/" />
      <Search path="/search" />
      <Details path="/details/:coopId" />
    </Router>
  );
}

ReactDOM.render(<App />, document.querySelector('#app-root'));
