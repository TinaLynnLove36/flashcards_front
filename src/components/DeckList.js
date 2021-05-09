import React from 'react';
import axios from 'axios';

export default class DeckList extends React.Component {
  state = {
    decks: []
  }

  componentDidMount() {
    axios.get(`./decks`)
      .then(res => {
        const decks = res.data;
        this.setState({ decks });
      })
  }

  render() {
    return (
      <ul>
        { this.state.decks.map(deck => <li>{deck.title}</li>)}
      </ul>
    )
  }
}