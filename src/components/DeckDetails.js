import React from 'react';

const DeckDetails = ({ deck }) => {
return (
    <div className='container'>
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <h1>{deck.name}</h1>
        </div>
      </div>
    </div>
    </div>
  )
}







export default DeckDetails;