import React from 'react'
import logo from '../../assets/logo.svg';
import './Navbar.css'
import { Link } from 'react-router-dom'
import { RiMenu3Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {

    const handlemenu = () => {
        console.log("hello")
        document.querySelector(".Respmenu .menuCont").style.transform = "translate(0%)"
    }
    
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
                <RiMenu3Line className='menu' onClick={handlemenu}/>
                <div className="menuCont">
                    <h4>Product<IoIosArrowDown className='downlist' /></h4>
                    <h4>Customers<IoIosArrowDown className='downlist' /></h4>
                    <h4>Pricing<IoIosArrowDown className='downlist' /></h4>
                    <h4>Recourses<IoIosArrowDown className='downlist' /></h4>
                    <img src="https://www.datocms-assets.com/40521/1707759317-hr-automation-for-growth-213x168.png?auto=format&fit=max&w=213" alt="" />
                    <p>Get a demo</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
