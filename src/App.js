import React, { Component } from 'react';
import Form from './Components/Form';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/hover.css/css/hover.css';
import '../node_modules/animate.css/animate.css';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        {/*Adding Form Component*/}
        <Form />
      </div>
    );
  }
}

export default App;
