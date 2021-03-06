import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CharacterListPage from '../../pages/CharacterListPage';
import Header from '../Header/Header';

export default function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={CharacterListPage}/>
      </Switch> 
    </Router>);

}
