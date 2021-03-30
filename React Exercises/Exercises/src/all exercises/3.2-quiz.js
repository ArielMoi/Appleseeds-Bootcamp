import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style={{display: 'flex', flexDirection:'column', width: '500px', margin: '50px'}}>
      <h1>How do you like front end?</h1>
      <label>How much do you like front end?</label>
      <input style={{width: '50%', marginLeft: '25%'}} type='range'></input>
      <label>what is your favorite from end topic?</label>
      <input style={{width: '50%', marginLeft: '25%'}}></input>
    </div>
  );
}

export default App;
