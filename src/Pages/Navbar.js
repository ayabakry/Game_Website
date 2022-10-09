import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/home.css'
import { Link } from 'react-router-dom';
import img from '../Imgs/MagLogo.png'








function Home() {

    return (
        <>
            <header>
                <div className="container">
                    <Link to="/" className="logo">
          <img src={img} alt="Logo" />
          
        </Link>

                    <nav>
                        
                        <ul>
                            <li><Link to="/order">Order</Link></li>
                            <li><Link to="#">Store</Link></li>
                            <li><Link to="#">Games</Link></li>
                            <li><Link to="#">Blog</Link></li>
                            <li><Link to="/signup">SignUp</Link></li>
                            <li><Link to="/login">LogIn</Link></li>
                        </ul>

                    </nav>
                </div>
            </header>

       
        </>
    );
}
export default Home