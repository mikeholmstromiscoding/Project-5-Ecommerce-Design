import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavbarTop from './components/navigation/NavbarTop'
import NavbarMiddle from './components/navigation/NavbarMiddle'
import NavbarBottom from './components/navigation/NavbarBottom'
import Home from './views/Home'


function App() {
  return (

    <BrowserRouter>
      <NavbarTop></NavbarTop>
      <NavbarMiddle></NavbarMiddle>
      <NavbarBottom></NavbarBottom>

      <Switch>
      <Route exact path='/' component={Home} />

      </Switch>



    </BrowserRouter>

  );
}

export default App;