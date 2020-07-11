import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Alert from 'react-bootstrap/Alert'
import './App.css';
import NavBarComponent from './components/NavBar'
import User from './components/User'
import TestContainer from './containers/TestContainer'

function App() {
  return (
    <div>
      <header>
        <NavBarComponent />
      </header>
      <div>
        <TestContainer />
      </div>
    </div>
  );
}

export default App;
