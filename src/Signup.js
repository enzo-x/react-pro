import React from 'react'
import './Signup.css'
import CustButton from './Common/CustButton'
import CustInput from './Common/CustInput'
function Signup() {
  return (
    <div className='Signup'>
         <h2>Signup</h2>
         <CustInput name={"User name"} type={'text'}/>
         <CustInput name={"Name"} type={'text'}/>
         <CustInput name={"Number"} type={'number'}/>
         <CustInput name={"Password"} type={'password'}/>
         <CustInput name={"confirm password"} type={'password'}/>
      <CustButton label={'Signup'}/>
    </div>
  )
}

export default Signup