import React, { useState } from 'react'
import logo from '../../assets/logo.svg';
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { RiMenu3Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {

    const [menu, setmenu] = useState(false);
    const handlemenu = () => {
        if(menu){
            document.querySelector(".Respmenu .menuCont").style.transform = "translate(100%)"
            setmenu(false)
        }
        else{
            document.querySelector(".Respmenu .menuCont").style.transform = "translate(0%)"
            setmenu(true)
        }
    }

    return (
        <div className="nav">
            <div className="navleft">
                <NavLink to="/" >
                    <img className='logo' to="/" src={logo} />
                </NavLink>
                {/* {['Product', 'Customers', 'Pricing', 'Resources'].map((item, idx) => {
                    const path = ["/", "/Customers", "/Pricing", "/Resources"]
                    return (
                        <div key={idx} className="links">
                            <NavLink to={path} className='link'>{item}</NavLink>
                        </div>
                    );
                })} */}
                <div className='links'>
                    <NavLink to="/Product" className='link'>Product</NavLink>
                    <NavLink to="/Customers" className='link'>Customers</NavLink>
                    <NavLink to="/Pricing" className='link'>Pricing</NavLink>
                    <NavLink to="/Resources" className='link'>Resources</NavLink>
                </div>
            </div>
            <div className="navmid">
                <div className="new">
                    <p>NEW</p>
                </div>
                <p>greytHR in G2’s Top 10</p>
            </div>
            <div className="navright">
                <p>Request Demo</p>
                <Link to="/Login"><button>Login</button></Link>
            </div>
            <div className="Respmenu">
                <RiMenu3Line className='menu' onClick={handlemenu} />
                <div className="menuCont">
                    {/* <h4>Product<IoIosArrowDown className='downlist' /></h4>
                    <h4>Customers<IoIosArrowDown className='downlist' /></h4>
                    <h4>Pricing<IoIosArrowDown className='downlist' /></h4>
                    <h4>Recourses<IoIosArrowDown className='downlist' /></h4> */}

                    <NavLink to="/Product"><h4>Product<IoIosArrowDown className='downlist' /></h4></NavLink>
                    <NavLink to="/Customers"><h4>Customers<IoIosArrowDown className='downlist' /></h4></NavLink>
                    <NavLink to="/Pricing"><h4>Pricing<IoIosArrowDown className='downlist' /></h4></NavLink>
                    <NavLink to="/Resources"><h4>Resources<IoIosArrowDown className='downlist' /></h4></NavLink>
                    <img src="https://www.datocms-assets.com/40521/1707759317-hr-automation-for-growth-213x168.png?auto=format&fit=max&w=213" alt="" />
                    <p>Get a demo</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
