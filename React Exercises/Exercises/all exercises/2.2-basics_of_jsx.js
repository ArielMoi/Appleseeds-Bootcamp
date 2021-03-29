import logo from './logo.svg';
import './App.css';

function App() {
  const data = ["hello", "world"];

  const number1 = 5;
  const number2 = 6;

  const string = 'I love React!'

  return (
    <div className="App">
      <h1>{`${data[0]} ${data[1]}`}</h1>
      <p>{`${number1} + ${number2} = ${number1 + number2}`}</p>
      <p>{`The string length is ${string.length}`}</p>
    </div>
  );
}

export default App;
