import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';



function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '2-23-2023'}])
  return (
    <div>
      <DisplayEntries parentEntries={entries} />
    </div>
  );
}

export default App;
