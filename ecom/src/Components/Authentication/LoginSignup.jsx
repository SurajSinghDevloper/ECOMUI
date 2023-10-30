import React, { useState } from 'react'
import "./LoginSignup.css"
import user_icon from "../../Assets/user.png"
import email_icon from "../../Assets/email.png"
import password_icon from "../../Assets/password.png"
import phone_icon from "../../Assets/smartphone-call.png"

function LoginSignup({ isOpen, onClose }) {
    const [action,setAction]= useState("Sign Up")
  return (
    <div
    className={`fixed inset-0 flex items-center justify-center z-50 ${
      isOpen ? 'block' : 'hidden'
    }`}
  >
    <div className='containers'>
    <div className="flex justify-between mb-4">
  <div></div> {/* This empty div will push the button to the right */}
  <button
    type="button"
    className="text-white hover:box text-lg p-2"
    onClick={onClose}
  >
    X
  </button>
</div>

        <div className='headers'>
            <h1 className='text-center text-White'>
                    {action}
            </h1>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action ==="Login"?<div></div>:<div className='input'>
                <img src={user_icon} alt=''/>
                <input type='text' placeholder='Name'/>
            </div>}

            <div className='input'>
                <img src={email_icon} alt=''/>
                <input type='email' placeholder='email@gmail.com'/>
            </div>
            {action ==="Login" ? <div></div> : <div className='input'>
                <img src={phone_icon} alt=''/>
                <input type='text' placeholder='Mobile No.'/>
            </div>}
            <div className='input'>
                <img  src={password_icon} alt=''/>
                <input type='password' placeholder='PassworXXX'/>
            </div>
        </div>
        
        {action ==="Sign Up" ? <div></div> : <div className='forgot-Password'>
            Lost Password ? <span>Click Here !</span>
        </div>
           }
        <div className='submit-container'>
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>
                Sign - Up
            </div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>
                Login
            </div>
        </div>
    </div>
    </div>
  );
}

export default LoginSignup;