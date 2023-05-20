import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../src/icon/TaxPlus 2.png' 
import './navBar.css' // Import your CSS here


function NavBar () {
    const [click , setClick] = useState (false)
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className="navbar-logo">
                        <img src={logo} alt="Logo" className="navbar-logo-image" /> {/* Add a class to your logo */}
                    </Link>
                    <div className='menu-icon'>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
