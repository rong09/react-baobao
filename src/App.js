import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  List from "./components/List";

class App extends Component {
  render() {

    var fruits=[
      "banana",
      "Mango",
      "Melon",
      "papaya"
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my app</h1>
        </header>
        <p className="App-intro">
          <List label="raybao's ass" items={fruits}/>
        </p>
        <p>
          <h2>my images</h2>
          <img src="/images/1.png" />
          <img src="/images/2.png" />
          <img src="/images/3.png" />
          <img src="/images/4.png" />
          <img src="/images/5.png" />
          <img src="/images/6.png" />
        </p>
      </div>
    );
  }
}

export default App;
