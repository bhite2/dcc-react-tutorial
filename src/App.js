import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';



function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '2-23-2023'}])

  function addNewEntry(entry){
    let tempEntries = [entry, ...entries]
    setEntries(tempEntries);

  }
  return (
    <div>
      <DisplayEntries parentEntries={entries} />
      <AddEntryForm addNewEntryProperty={addNewEntry}/>
    </div>
  );
}

export default App;
