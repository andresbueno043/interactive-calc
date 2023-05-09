import logo from './logo.svg';
import './App.css';
import { Button } from './components/button';
import { Screen } from './components/screen';
import { ClearButton } from './components/clearButton';
import { useState } from 'react';
import { click } from '@testing-library/user-event/dist/click';
import { evaluate } from 'mathjs';
import { GithubButton } from 'react-github-link-button/dist'

function App() {
  
  const [input, setInput] = useState('');

  const addInput = value => {
    setInput(input + value); //Sets the input value plus the button value
  };

  const clearInput = () => {
    setInput(''); //Clears the input value 
  };

  const calculate = () => {
    if (input){
      try {
        setInput(evaluate(input));
      } catch (error) {
        setInput('Error, clear and try again')
      }
    } else {
      alert('Por favor, ingresa valores')
    }
  };

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
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleClick={calculate}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className='row'>
          <ClearButton handleClick={clearInput}>
            Clear
          </ClearButton>
        </div>
      </div>
      <GithubButton />
    </div>
  );
}

export default App;
