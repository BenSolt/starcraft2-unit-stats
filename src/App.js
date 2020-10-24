import React from 'react';
import { Route } from "react-router-dom";
import './App.css';

import Navbar from './components/Navbar';
import Form from './components/Form';

import FormProtoss from './components/FormProtoss';
import FormTerran from './components/FormTerran';
import FormZerg from './components/FormZerg';

function App() {

  return (
    <div>
      <Navbar/>

      {/* <Form/> */}

      <Route exact path="/" component={Form}/>
      <Route path="/protoss" component={FormProtoss} />
      <Route path="/terran" component={FormTerran} />
      <Route path="/zerg" component={FormZerg} />

    </div>
   

  );
}

export default App;