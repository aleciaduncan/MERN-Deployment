import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import New from './views/New';
import Detail from './views/Detail';
import Update from './views/Update';



function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <New path="/pets/new"/>
        <Detail path="pets/:id"/>
        <Update path="pets/:id/edit"/>
      </Router>
    </div>
  );
}
export default App;
