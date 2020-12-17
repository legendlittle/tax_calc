import React from 'react'

function Display(props) {
  return (
    <div className='display'>
      <h1 className='owe'> Here's how much tax you owe: ${parseInt(props.owed).toFixed(2)}</h1>

      <h2 className='diff'> Long-term gains tax difference versus short-term gains of equal amount: ${parseInt(props.diff).toFixed(2)} less taxes if you held for more than a year. That's a {parseInt(props.perc).toFixed(4)}% increase in taxes.</h2>
    </div>

  )
}

export default Display;
