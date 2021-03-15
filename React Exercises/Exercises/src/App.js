import React from 'react';
import ReactDOM from 'react-dom';
import ButtonComponent from './components/ButtonComponent/ButtonComponent'

function App() {
  return (
    <div>
      <ButtonComponent>
          <strong>important</strong>
      </ButtonComponent>

    <ButtonComponent>
        not important
    </ButtonComponent>
    </div>
  );
}

export default App;
