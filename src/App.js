import './App.css';

import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import Home from './Components/Home/Home';
import ArtistDetails from './Components/ArtistDetails/ArtistDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/:id" component={ArtistDetails}></Route>
      </Switch>
    </Router>
  );
}

export default App;
