import React from 'react'
import './CustInput.css'

function CustInput({name,type}) {
  return (
    <div>
        <label htmlFor="">{name}</label>
        <input className='inp' type={type} value=""/>
    </div>
  )
}

export default CustInput