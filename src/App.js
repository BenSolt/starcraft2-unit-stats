import React from 'react';
import { Route } from "react-router-dom";
import './App.scss';

import Navbar from './components/navbar/Navbar';
import Home from './components/Home';

import FormProtoss from './components/FormProtoss';
import FormTerran from './components/FormTerran';
import FormZerg from './components/FormZerg';



function App(props) {

  return (
    <div>
      <Navbar />
      <Route exact path="/"  component={Home}/>
      <Route path="/protoss" component={FormProtoss} />
      <Route path="/terran" component={FormTerran}/>
      <Route path="/zerg" component={FormZerg} />

    </div>
   

  );
}

export default App;