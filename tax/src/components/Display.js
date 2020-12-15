import React from 'react'

function Display(props) {
    return (
        <div className='display'>
        <h1> Here's how much tax you owe: ${parseInt(props.owed).toFixed(2)}</h1>

    <h2 className='diff'> Long-term gains tax difference versus short-term gains of equal amount: ${parseInt(props.diff).toFixed(2)} if you held for more than a year.</h2>
      </div>
  
    )
}

export default Display;
