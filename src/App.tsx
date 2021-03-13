import React, { useEffect } from 'react';
import './App.css';
import HenchmanForm from './HenchmanForm';

function App() {
  useEffect(() => {
    document.title = 'Henchman for Killer Sudoku';
  });
  return (
    <div className="App">
      <title>Henchman for Killer Sudoku and Kakuro</title>
      <header className="App-header">Henchman for Killer Sudoku and Kakuro</header>
      <HenchmanForm />
    </div>
  );
}

export default App;
