import React from 'react'
import'./CustButton.css'

function CustButton(props) {
  console.log(props.label);
  return (
  <button className='btn'>{props.label ?? 'click me'}</button>
  )
}

export default CustButton