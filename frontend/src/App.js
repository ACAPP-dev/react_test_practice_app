import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Alert from 'react-bootstrap/Alert'
import './App.css';
import NavBarComponent from './components/NavBar'
import User from './components/User'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBarComponent />
      </header>

    </div>
  );
}

export default App;
