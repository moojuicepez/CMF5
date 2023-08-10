import React, { useState } from 'react';
import Counter from './components/counter';
import './App.scss';

function App() {
  const [allNames, setAllNames] = useState([]);

  const handleNameChange = (name) => {
    setAllNames([...allNames, name]);
  };
  return (
    <div className="App">
      <Counter commanderNames={allNames} onNameChange={handleNameChange} />
      <Counter commanderNames={allNames} onNameChange={handleNameChange} />
      <Counter commanderNames={allNames} onNameChange={handleNameChange} />
      <Counter commanderNames={allNames} onNameChange={handleNameChange} />
      <Counter commanderNames={allNames} onNameChange={handleNameChange} />
      {allNames}
    </div>
  );
}

export default App;
