import React from 'react';
import './App.scss';
import Dropdown from './Dropdown';

const items = [
  {
    id: 1,
    value: 'tweet 1',
  },
  {
    id: 2,
    value: 'tweet 2',
  },
  {
    id: 3,
    value: 'tweet 3',
  },
];

function App() {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        Twitter search
      </h1>
      <Dropdown title="Search Tweet" items={items} multiSelect />
    </div>
  );
}


export default App;