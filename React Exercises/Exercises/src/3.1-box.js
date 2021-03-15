import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div
      className="App"
      style={{ background: "green", height: "200px", width: "200px", padding: '10px'}}
    >
      <div style={{ background: "blue", height: "180px", width: "180px", padding: '10px' }}>
        <div style={{ background: "red", height: "160px", width: "160px", padding: '10px', display:'flex', flexDirection:'column'}}>
          <div
            style={{ background: "yellow", height: "60px", width: "100%", }}
          ></div>
          <div style={{ background: "yellow", height: "60px", width: "100%", marginTop: '15px'}}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
