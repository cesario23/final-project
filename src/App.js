import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import MainRouter from './MainRouter';
import ContextWrapper from './Contex/context'
import './App.css';


function App() {
  return (
    <Router>
      <ContextWrapper>
        <MainRouter/>
      </ContextWrapper>
    </Router>
    
  );
}

export default App;
