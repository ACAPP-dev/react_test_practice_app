import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Alert from 'react-bootstrap/Alert'
import './App.css';

import TestContainer from './containers/TestContainer'

// convert to class based component and add state for user

function App() {

  return ( 
    <div>
      <TestContainer />
    </div>
  );
}

export default App;
