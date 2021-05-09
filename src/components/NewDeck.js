import React from 'react';
import axios from 'axios';

export default class NewDeck extends React.Component {
  state = {
    title: '',
  }

 /*  handleChange = event => {
    this.setState({ title: event.target.value });
  } */

        handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
  handleSubmit = event => {
    event.preventDefault();

    const user = {
      title: this.state.title
    };

    axios.post('./decks', { user })
      .then(res => {
        console.log(user);
      
      })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            New Deck Title:
            <input type="text" defaultValue={this.state.title} name="name" onChange={this.handleInputChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}









































/*import React, { Component } from 'react';
import axios from 'axios'
import DeckDetails from './DeckDetails';

class NewDeck extends React.Component {

    constructor(decks) {
        super(decks)
        this.state = {
            decks: []
            
        } 
    }   

componentDidMount() {
    axios.post(`url`)
    .then(res => {
        const decks = res.data;
        this.setState({ decks });
    })
}

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post('./decks', this.state)
        .then(response => {
            this.setState({
                decks: response.data
            })
            console.log(response)
        })
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        const {decks} = this.state

    return (
     
        <div>
            <form onSubmit={this.handleSubmit}>
                <h1>Title is: {decks}</h1>
                    {
                    decks.map(deck => 
                    <DeckDetails key={deck._id} deck={deck.title}></DeckDetails> )}
                <input type='text' placeholder='Title' name='title' onChange={this.handleInputChange} />
   
                <button>Enter Title</button>
     
        </form>

        
        </div>
  
  
  );

}
}
        <div>
        decks.map(deck => <div key={deck.id}>{deck.title}</div>
        </div> */
 


  // <DeckGrid decks={title}/>

  //<div className='card'>
     // <div className='card-inner'>
     //   <div className='card-front'>
     // //    <h1>{deck.title}</h1>
     //   </div>
      //</div>
   // </div>