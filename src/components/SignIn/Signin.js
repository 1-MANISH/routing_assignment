import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Signin.css"
function Signin(props) {


    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[repassword,setRepassword] = useState('');


    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const repasswordRef = useRef(null);


    const navigate = useNavigate();


    function handleSubmit(e){
        e.preventDefault();
        const uemail = emailRef.current.value
        const upass = passwordRef.current.value
        const urepass = repasswordRef.current.value

        setEmail(uemail)
        setPassword(upass)
        setRepassword(urepass);

        if(upass === urepass){
            props.setFunction(uemail,upass)
            navigate("/login")
        }else{
            navigate("")
        }
    }


    return (
        <div className='sign-container'>
                <form className='sign-form' onSubmit={handleSubmit}>
                    <input type="email" ref={emailRef} placeholder='Enter Email' required={true} />
                    <input type="text" ref={passwordRef} placeholder='Enter password' required={true} />
                    <input type="text" ref={repasswordRef} placeholder='Enter password again' required={true}/>
                    <input type={"submit"} onClick={handleSubmit} value="Signin"  />
                </form>
        </div>
    )
}

export default Signin