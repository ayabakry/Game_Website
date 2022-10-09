import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/signup.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";





function SignUp() {

    const eye = <FontAwesomeIcon icon={faEye} />;

    const [userData, setuserData] = useState({

        username: '',
        email: '',
        password: '',
        confirmpassword: ''
    })

    const [errors, setErrors] = useState({
        usernameErr: null,
        emailErr: null,
        passwordErr: null,
        confirmpasswordErr: null

    })


    const [isShown, setIsSHown] = useState(false);
    const togglePassword = () => {
        setIsSHown((isShown) => !isShown);
    };


    const changeData = (e) => {
        if (e.target.name === 'username') {
            setuserData({
                ...userData,
                username: e.target.value
            })
            setErrors({
                ...errors,
                usernameErr:
                    e.target.value.length === 0 ? 'This Field Is Required' :
                        e.target.value.length < 3 ? 'Must Be More 3 Character' : null
            })
        }

        if (e.target.name === 'email') {
            setuserData({
                ...userData,
                email: e.target.value
            })
            setErrors({
                ...errors,
                emailErr:
                    e.target.value.length === 0 ? "This Field Is Required" :
                        !(/\S+@\S+\.\S+/.test(e.target.value)) ? "You have entered an invalid email address!" : null
            })
        }

        if (e.target.name === 'password') {
            var regpassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_])(?=.{8,})");

            setuserData({
                ...userData,
                password: e.target.value
            })

            setErrors({
                ...errors,
                passwordErr:
                    e.target.value.length === 0 ? "This Field Is Required" :
                        !(regpassword.test(e.target.value)) ? "Must Be 8 char and contain capital and small and special char" : null
            })
        }

        if (e.target.name === 'confirmpassword') {

            setuserData({
                ...userData,
                confirmpassword: e.target.value
            })
            setErrors({
                ...errors,
                confirmpasswordErr:
                    e.target.value.length === 0 ? "This Field Is Required" :
                        e.target.value !== userData.password ? "The Password Dosen't Match " : null
            })
        }


    }
    return (
        <>
        <section className='section' style={{background:"linear-gradient(99.6deg, rgb(112, 128, 152) 10.6%, rgb(242, 227, 234) 32.9%, rgb(234, 202, 213) 52.7%, rgb(220, 227, 239) 72.8%, rgb(185, 205, 227) 81.1%, rgb(154, 180, 212) 102.4%)",width:'100%',height:'755px'}}>
            <div className="container"  >
                 <div className="row">
                    <div className="col-md-6">
                    {/* <h1 style={{marginLeft:'82%',marginTop:'10px'}}>Magnum</h1> */}
                        <div className="card">
                            <form className="box">
                                <h1 style={{fontSize:'50px',color:'#0E185F'}}>Sign Up </h1>
                                <p style={{color:'white'}}> Please enter your Signup and password!</p>
                                <input
                                
                                    className=
                                    {`form-control ${errors.usernameErr ? "border-danger" : "border-success"}`}
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    value={userData.username}
                                    onChange={(e) => changeData(e)} />

                                <p className="text-danger"> {errors.usernameErr} </p>

                                <input
                                    className=
                                    {`form-control ${errors.emailErr ? "border-danger" : "border-success"}`}
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    value={userData.email}
                                    onChange={(e) => changeData(e)} />

                                <p className="text-danger"> {errors.emailErr} </p>

                                <input
                                    className=
                                    {`form-control ${errors.passwordErr ? "border-danger" : "border-success"}`}
                                    type={isShown ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    value={userData.password}
                                    onChange={(e) => changeData(e)} />
                                {/* <i onClick={togglePassword}>{eye}</i> */}

                                <p className="text-danger"> {errors.passwordErr} </p>

                                <input
                                    className=
                                    {`form-control ${errors.confirmpasswordErr ? "border-danger" : "border-success"}`}
                                    type="password"
                                    name="confirmpassword"
                                    placeholder="Confirm Password"
                                    value={userData.confirmpassword}
                                    onChange={(e) => changeData(e)} />

                                <p className="text-danger"> {errors.confirmpasswordErr} </p>

                                {/* <Link className="forgot text-muted" to="#">Forgot password?</Link> */}
                                <button style={{fontSize: '20px'}}
                                    type="submit"
                                    disabled={errors.usernameErr || errors.emailErr || errors.passwordErr || errors.confirmpasswordErr}>
                                    SignUp
                                </button>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
}
export default SignUp