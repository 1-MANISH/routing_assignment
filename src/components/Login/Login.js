import React from 'react'
import {useRef,useState} from "react"
import { Outlet, useNavigate } from 'react-router-dom';
import "./login.css"

function Login(props) {


    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const navigate = useNavigate();


    function handleSubmit(e){
        e.preventDefault();

        const uemail = emailRef.current.value;
        const upass = passwordRef.current.value;

        if(props.userEmail === uemail && props.userPassword === upass){
            props.setSession(true);
            navigate('/dashboard')
        }else{
            navigate('')
        }
        
    }
  return (
    <div className='login-container'>
         <form className='login-form' onSubmit={handleSubmit}>
                <input type="email" ref={emailRef} placeholder='Enter Email' required={true} />
                <input type="text" ref={passwordRef} placeholder='Enter password' required={true} />
                <input type={"submit"} onClick={handleSubmit} value="login"  />
        </form>
        <Outlet/>
    </div>

    
  )
}

export default Login