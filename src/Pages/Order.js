import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../Imgs/Magnum.png'

function Order() {

    return (
        <>
            <section style={{ background: "linear-gradient(99.6deg, rgb(112, 128, 152) 10.6%, rgb(242, 227, 234) 32.9%, rgb(234, 202, 213) 52.7%, rgb(220, 227, 239) 72.8%, rgb(185, 205, 227) 81.1%, rgb(154, 180, 212) 102.4%)", width: '100%', height: '800px' }}>
                <div className="container"  >


                    <div className="row">
                        <h1 style={{ textAlign: 'center', marginTop: '90px', color: '#0a0a72', fontSize: '40px' }}>Start your first steps into Robotics</h1>
                        <div >
                            <p style={{ textAlign: 'center', marginTop: '10px', color: '#2b2bae', fontSize: '25px' }}>Let's Build, Code and Play </p>
                        </div>
                        <div  style={{ maxWidth: "1100px" }}>
                            <div className="row g-0">
                                <div className="col-md-6">
                                    <img src={image} style={{ borderRadius: ' 100px', width: "450px", height: '550px', marginBottom: '10px' }} />
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ color: '#0a0a72', fontSize: '25px',marginTop:'45px' }}>Magnum Starter Builder Kit</h5>
                                        <p className="card-text" style={{ color: '#2b2bae', fontSize: '20px', marginTop: '25px' }}>The basic and most simple version of Magnum to build your very first robot.</p>

                                    </div>
                                    <button type="submit" className="btn btn-danger" value="patient" style={{ marginLeft: '10px', marginTop: '60px' }}> Buy Now </button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>



            </section>        </>
    );
}
export default Order