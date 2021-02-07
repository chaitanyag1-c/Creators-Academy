import React from 'react'
import '../App.css'
const Header = () => {
    return (
        <div>

            <header data-aos="fade-out">
        <ul className="ulhead">
            <img src="logo1.png" alt="img" /> 
    
            <div className="nav-items">
                <li> <a href=""> Home </a> </li>
                <li> <a href=""> About </a> </li>
                <li> <a href=""> Contact Us </a> </li>
            </div>
        </ul>
       </header>
       
        </div>
    )
}

export default Header
