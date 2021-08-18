import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import MainRouter from './MainRouter'
import AuthContextWrapper from './Context/AuthContext'
import './App.css';


function App() {
  return (
   <React.Suspense fallback="loading">
    <Router>
      <AuthContextWrapper>
        <MainRouter/>
      </AuthContextWrapper>
      </Router>
    </React.Suspense>
  )
}

export default App;
