import React from 'react'

function NewPass() {
  return (
     
  <div className='forgot_container'>
  <form action="" className='auth-form' onSubmit={handleLogin}>
  <b style={{fontSize:"25px" }}>Forgot password</b>
  <input type="password" name="newPassword" id="" placeholder='enter new password ' onChange={hendleData}/>
  <input type="password" name="confirmNewPassword" id="" placeholder='enter confirm password ' onChange={hendleData}/>
  <button type='submit'>change password</button>

  </form>

</div>
  )
}

export default NewPass