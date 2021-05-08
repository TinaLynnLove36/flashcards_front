import Header from './components/Header';
import FormDialog from "./components/FormDialog";
import Deck  from "./components/Deck";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeckGrid from "./components/DeckGrid";
import './App.css';



function App() {

  const [decks, setDecks] = useState([])
 

  useEffect(() => {
    const fetchDecks = async () => {
      const result = await axios('./decks')
      console.log(result.data)
      setDecks(result.data)
    }
      fetchDecks()
  }, [])

  return (
    <div className="App">
        <Header />
        <DeckGrid decks={decks}/>
        <FormDialog />


    </div>
  );
}

export default App;








