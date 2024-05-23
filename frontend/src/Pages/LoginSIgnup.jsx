import React from 'react'
import './CSS/LoginSignup.css'
 
export const LoginSIgnup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>

        <div className="loginsign-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email " placeholder='Email Address' />
          <input type="password" placeholder='password' />
        </div>

        <button> Continue</button>
        <p className="loginsign-login">Alerady have an account?<span>Login here</span></p>

        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p> By continuing , i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
     
    </div>
  )
}
