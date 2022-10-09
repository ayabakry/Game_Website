import '../Style/login.css'
import React from 'react';
import Button from 'react-bootstrap/Button';
import ro from '../Imgs/robot5.png';
import { useState } from 'react';

function Login() {
    const [loginUser, setLoginUser] = useState({
        email: '',
        Password: '',
    })
    const [errors, setErrors] = useState({
        erremail: null,
        errpassword: null
    })
    const changeData = (e) => {
        if (e.target.name === 'email') {
            setLoginUser({
                ...loginUser,
                email: e.target.value
            })
            setErrors({
                ...errors,
                erremail: e.target.value.length === 0 ?
                    "This Field Requierd" :
                    !(/\S+@\S+\.\S+/.test(e.target.value)) ?
                        "You have entered an invalid email address!" : null
            })

        }
        if (e.target.name === 'Password') {
            setLoginUser({
                ...loginUser,
                Password: e.target.value
            })
            setErrors({
                ...errors,
                errpassword: e.target.value.length === 0 ?
                    "This Field Requierd" :
                    e.target.value.length < 8 ?
                        "Password less than 8 charachter" : null
            })
        }
    }

    return (
        <>
            <div className='loginPage'>



                <div className="loginBox">
                    <br />

                    <img className="user" src={ro} height="150px" width="150px" />
                    <h3 className='title1'>LogIn</h3>
                    <form action="https://play.anghami.com" method="post">
                        <div className="inputBox">
                            <input id="uname" type="text"
                                name="email" placeholder="Email"
                                onChange={(e) => changeData(e)} />
                            <p style={{ color: 'red',fontWeight:'bold' }}> {errors.erremail} </p>
                            <input id="pass" type="password"
                                name="Password" placeholder="Password"
                                onChange={(e) => changeData(e)} />
                            <p style={{ color: 'red',fontWeight:'bold' }}> {errors.errpassword} </p>
                        </div>
                        <button className='loginbtn' type="submit" name="" value="Login" style={{ width: '100px', paddingLeft: '10px' }}
                            disabled={errors.erremail || errors.errpassword}
                            // onClick={handleChange}
                            > Login</button>
                    </form>

<br/>

                    <a href="#" className='forgetPass'>Forget Password?<br /> </a>
                    <div className="text-center">
                        <a href="#" className='goSignUp'>Sign Up?<br /> </a>
                    </div>

                </div>

            </div>
        </>
    )
}
export default Login