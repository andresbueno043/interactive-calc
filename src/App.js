import logo from './logo.svg';
import './App.css';
import { Button } from './components/button';

function App() {
  return (
    <div className="App">
      <h1
      className='title'
      >
        My own interactive calc
      </h1>
      <div className='main-container'>
        <div className='row'>
          <Button>1</Button>
          <Button>+</Button>
        </div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
      </div>
    </div>
  );
}

export default App;
