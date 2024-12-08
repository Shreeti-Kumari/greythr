import React from 'react'
import logo from '../../assets/logo.svg';
import './Navbar.css'
import { Link } from 'react-router-dom'
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
    return (
        <div className="nav">
            <div className="navleft">
                <Link><img className='logo' to="/" src={logo} alt="" /></Link>
                {['Product', 'Customers', 'Pricing', 'Resources'].map((item, idx) => {
                    return (
                        <div className="links">
                            <Link to="/" className='link' key={idx} href="#">{item}</Link>
                        </div>
                    );
                })}

            </div>
            <div className="navmid">
                <div className="new">NEW</div>
                <p>greytHR in G2’s Top 10</p>
            </div>
            <div className="navright">
                <p>Request Demo</p>
                <Link to="/Login"><button>Login</button></Link>
            </div>
            <div className="Respmenu">
                <RiMenu3Line className='menu'/>
            </div>
        </div>
    )
}

export default Navbar
