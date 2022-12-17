import logo from './logo.svg';
import './App.css';
import { Button } from './components/button';
import { Screen } from './components/screen';
import { ClearButton } from './components/clearButton';
import { useState } from 'react';

function App() {
  
  const [input, setInput] = useState('');

  const addInput = value => {
    setInput(input + value);
  }

  return (
    <div className="App">
      <h1
      className='title'
      >
        My own interactive calc
      </h1>
      <div className='main-container'>
        <Screen input={input}/>
        <div className='row'>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className='row'>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className='row'>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>*</Button>
        </div>
        <div className='row'>
          <Button>=</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>/</Button>
        </div>
        <div className='row'>
          <ClearButton>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
