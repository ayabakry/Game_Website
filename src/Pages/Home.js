import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { faFacebook, faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import img from '../Imgs/MagLogo.png';
import imge from '../Imgs/ManSec.png';
import imgbuild from '../Imgs/build.jpg';
import imgcode from '../Imgs/Code.jpg';



import '../Style/home.css';


function Home() {

    return (
        <>

            <div className="landing">
                <div className="overlay"></div>
                <div className="text">
                    <div className="content">
                        <h1>
                            Hi, My Name Is Mangum
                            <br />
                        </h1>
                        <p style={{fontSize:'16px'}}>
                            An open source modular robot with an epic personality,
                            a companion for learning technology and creativity
                        </p>
                    </div>
                </div>


            </div>
            <div class="design">
                <div class="image">
                    <Link to="/" className="logo">
                        <img src={imge} />
                    </Link>                </div>
                <div className="text">
                    <h1>Build, Code and Design your own Robot</h1>
                    <h4> I am an interactive friend that anyone can make </h4>
                    <button type="submit" className="btn btn-danger" style={{ marginLeft: '10px', marginTop: '60px', borderRadius: '15px', width: '100px' }}>Play Now!</button>

                </div>

            </div>
            <div className='container'>
                <br></br>
                <h1 style={{ textAlign: 'center',color:'#0a0a72' }}>First steps into Robotics and STEM+A</h1>
                <p style={{ textAlign: 'center', fontSize:'20px',color:'#2b2bae' }}>Learn and master the skills of the future in a fun and educational way</p>
                <br></br>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card ">
                            <img src={imgbuild} class="card-img-top" alt="..." style={{ borderRadius: ' 50px' }} /><br></br>
                            <div class="card-body">
                                <h2 class="card-title" style={{ textAlign: 'center',color:'#0a0a72' }}>Build your robot friend</h2>
                                <p class="card-text" style={{ textAlign: 'center',color:'#2b2bae', fontSize:'20px' }}>Easy assembly instructions and guides</p>
                            </div>
                        </div>
                        <button  class="btn btn-danger"  style={{marginLeft:'200px'}}>Instruction Manuals and 3D</button>

                    </div>
                    <div class="col">
                        <div class="card ">
                            <img src={imgcode} class="card-img-top" alt="..." style={{ borderRadius: ' 50px' }} /><br></br>
                            <div class="card-body">
                                <h2 class="card-title" style={{ textAlign: 'center',color:'#0a0a72' }}>Code like a Pro</h2>
                                <p class="card-text" style={{ textAlign: 'center',color:'#2b2bae', fontSize:'20px' }}>Fast and simple coding</p>
                            </div>
                           
                        </div>
                        <button  class="btn btn-danger"  style={{marginLeft:'240px'}}>Download Software</button>

                    </div>

                </div>

            </div>
            <br></br>
            <footer className="text-center text-white" style={{ background: "linear-gradient(69.9deg, rgb(76, 79, 106) 3.2%, rgb(118, 124, 163) 97.6%)", height: '100%' }}>
                <div className="container">


                    <section className="mb-5">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <Link to="/" className="logo">
                                    <img src={img} alt="Logo" style={{ width: '100px', marginRight: '30px', marginTop: '30px' }} />
                                </Link>
                            </div>
                            <p style={{ fontSize: '30px', marginRight: '30px', color: '#34e69c' }}>Magnum</p>

                        </div>
                    </section>

                    <section className="text-center mb-5">

                        <Link to='' class="text-white me-4" style={{fontSize:'30px'}}>

                            <FontAwesomeIcon icon={faFacebook} />
                        </Link>

                        <Link to='' class="text-white me-4" style={{fontSize:'30px'}}>
                            <FontAwesomeIcon icon={faTwitter} />
                        </Link>

                        <Link to='' class="text-white me-4" style={{fontSize:'30px'}}>
                            <FontAwesomeIcon icon={faGoogle} />
                        </Link>

                        <Link to='' class="text-white me-4" style={{fontSize:'30px'}}>
                            <FontAwesomeIcon icon={faInstagram} />
                        </Link>

                        <Link to='' class="text-white me-4" style={{fontSize:'30px'}}>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </Link>

                        <Link to='' class="text-white me-4" style={{fontSize:'30px',color:'#3b5998'}}>
                            <FontAwesomeIcon icon={faGithub} />
                        </Link>
                    </section>
                </div>

                <div
                    className="text-center p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                    © 2020 Copyright


                </div>
            </footer>
        </>
    );
}
export default Home