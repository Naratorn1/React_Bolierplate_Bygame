import React from 'react';
import Header from '../../components/Header'
import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          หน้าแรก
        </p>
      
   
    </div>
  );
}

export default App;
