import React from 'react'
import { Link } from 'react-router-dom'

import'./LoginPage.css'
export default function LoginPage() {
  return<>
  <div className="login-img">
   <div className="login-container ">
            <form action="">
                <h1 className='fw-bold'>Login</h1>
                <div className="input-box">
                <input type="text" id="Uname" name="Uname" placeholder="Username" required/>
                <i className="fa-solid fa-user"></i>
                </div>
                <div className="input-box">
                <input type="password"  name="Upassword" placeholder="Enter Your Password" required/>
                <i className="fa-solid fa-lock"></i>
                </div>
        <div className="remember-forget">
            <label for="">
                <input type="checkbox"/> Remember Me
            </label>
            <Link to="#">Forget Password?</Link>
        </div>
        <button className="form-btn fw-bold" type="submit">Login</button> 
        <div className="register-link">
            <p>don't have an account? <a href="c:\Users\alaah\Downloads\Login And Registrarion Pages\Sign-up page\index.html">Register Now</a> </p>
        </div>
    </form>
    </div>
  
  </div>
  </>
}

