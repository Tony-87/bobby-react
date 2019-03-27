import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as monaco from 'monaco-editor';

class App extends Component {

  componentDidMount() {
    monaco.editor.create(document.getElementById('container'), {
      value: [
        'select * from table1',
        'insert into tableB values (1,3,3)',
        'update tableC set a=3',
        'WHILE (SELECT AVG(ListPrice) FROM Production.Product) < $300',
        'BEGIN',
        'UPDATE Production.Product',
        'SET ListPrice = ListPrice * 2',
        'SELECT MAX(ListPrice) FROM Production.Product',
        'IF (SELECT MAX(ListPrice) FROM Production.Product) > $500',
        '   BREAK',
        'ELSE',
        ' CONTINUE',
        'END',
        'PRINT Too much for the market to bear',
      ].join('\n'),
      language: 'sql',
      align: 'center'
    });

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div id="container" style={{ width: '800px', height: '600px' }}></div>
      </div>
    );
  }
}

export default App;
