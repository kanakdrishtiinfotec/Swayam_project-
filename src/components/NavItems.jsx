import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo/logo.jpeg"


function NavItems() {
    const [menuToggle,setMenuTogle]=useState(false);
    const [socialToggle,setSocialToggle]=useState(false);
    const [headerFixed,setHeaderFixed]=useState(false);
    window.addEventListener("scroll",()=>{
        if(window.scrollY>200){
            setHeaderFixed(true);
        }
        else
        {
            setHeaderFixed(false);
        }
    })
  return (
    <header className={`heade-ection style-4 ${headerFixed ? "header-fixed fadeInUp":""}`}>
        {/* header top start */}
        <div className={`header-top d-md-none ${socialToggle ? "open":""}`}>
            <div className='container'>
                <div className='header-top-area'>
                    <Link to="/signup" className='lab-btn me-3'>
                        <span>Create Account</span>
                    </Link>
                    <Link to="/login">
                        <span>login</span>
                    </Link>

                </div>

            </div>
        </div>
        {/* header bottom start */}
          <div className="header-bottom">
            <div className="container">
                <div className='header-wrapper'>
                        {/* logo */}
                        <div className='logo-search-acte'>
                            <div className='logo'>
                                <Link to={"/"}>
                                    <img src={logo} style={{width:"10rem"}} alt="" />
                                </Link>
                            </div>
                        </div>
                        {/* menu area */}
                        <div className='menu-area'>
                            <div className='menu'>
                                <ul className={`lab-ul ${menuToggle ? "active" :""}`}>
                                    <li><Link to="/">Home
                                    </Link></li>
                                    <li><Link to="/shop">Shop
                                    </Link></li>
                                    
                                    <li><Link to="/about">About
                                    </Link></li>
                                    <li><Link to="/contact">Contact
                                    </Link></li>
                                </ul>
                            </div>
                            {/* signin and login */}
                            
                            <Link to="/login" className=' lab-btn d-none d-md-block'>Login</Link>
                            {/* menu togler */}
                            <div onClick={()=>setMenuTogle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active":""}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            {/* social toggle */}
                            <div className='ellepsis-bar d-md-none' onClick={()=>setSocialToggle(!socialToggle)} >
                            <i className="icofont-info-square"></i>
                            </div>
                        </div>
                </div>
            </div>
          </div>
    </header>
  )
}

export default NavItems