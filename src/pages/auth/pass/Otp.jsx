import React from 'react'

function Otp() {
  return (
    <div className='forgot_container'>
    <form action="" className='auth-form' onSubmit={handleLogin}>
    <b style={{fontSize:"25px" }}>Forgot password</b>
   
    <input type="text" name="otp" id="" placeholder='enter valid OTP ' onChange={hendleData}/>
    <button type='submit'>next</button>

    </form>

  </div>
  )
}

export default Otp