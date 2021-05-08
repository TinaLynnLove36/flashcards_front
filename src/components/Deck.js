import React from 'react';
import Card from './Card';

export default function Deck({ deck }) {
    return (
        <div className="card-grid">
            {deck.map(card => {
                return <Card card={card} key={card.id} />
            })}
        </div>
    )
}









