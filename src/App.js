import Header from './components/Header';
import CreateDeckForm from "./components/CreateDeckForm";
import Deck  from "./components/Deck";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeckGrid from "./components/DeckGrid";
import './App.css';
import NewDeck from './components/NewDeck';
import DeckList from './components/DeckList';



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
        <DeckList />
        <NewDeck />
   
      
      

        


    </div>
  );
}

export default App;
//        <CreateDeckForm />
//  <DeckGrid decks={decks}/>
 // <NewDeck />
    //  <DeckGrid decks={decks}/>
       //  <CreateDeckForm />







