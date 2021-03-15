import React from 'react';
import Card from './components/Card/Card.component';

function App() {
  return (
    <div style={{display:'flex'}}>
      <Card
        src={"https://picsum.photos/id/237/200/300"}
        title="doggir"
        description="im a doogy hi"
        link1="#"
        link1text="dog"
        link2="#"
        link2text="cat"
      />
      <Card
        src={"https://picsum.photos/seed/picsum/200/300"}
        title="seal?"
        description="kjkd lsjdkc dslcjlks"
        link1="#"
        link1text="door"
        link2="#"
        link2text="window"
      />
      <Card
        src={"https://picsum.photos/200/300?grayscale"}
        title="this is the seal"
        description="grey pic"
        link1="#"
        link1text="is it? "
        link2="#"
        link2text="it is!"
      />
    </div>
  );
}

export default App;
