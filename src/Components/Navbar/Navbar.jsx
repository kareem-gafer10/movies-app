import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import classes from "./Navbar.module.css"
const Navbar = () => {


  const {userData,handleLogout} = useContext(AuthContext);




  return (
    <nav className="navbar navbar-expand-lg shadow-lg fixed-top py-2">
  <div className="container-fluid">
    <Link className="navbar-brand text-light fs-2 me-lg-5" to="/">Noxe</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fa-solid fa-bars text-white fs-4"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

    {userData? <>
          <li className="nav-item">
          <Link className="nav-link active text-light" to="home">Home</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link text-light" to="movies">Movies</Link>
          </li> 
         <li className="nav-item">
          <Link className="nav-link text-light" to="tv">TvShow</Link>
          </li> 
          <li className="nav-item">
          <Link className="nav-link text-light" to="person">People</Link>
          </li> 
    </>
    :""
    }

        
      </ul>


      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

        <li className=' d-flex align-items-center mx-lg-5 order-lg-first order-last'>
            <Link to="https://facebook.com" target='_blank'>
            <i className='fab fa-facebook text-light mx-lg-1 me-1 fs-5'></i>
            </Link>
            <Link to="https://spotify.com" target='_blank'>
            <i className='fab fa-spotify text-light mx-lg-1 mx-1 fs-5'></i>
            </Link>
            <Link to="https://instagram.com" target='_blank'>
            <i className='fab fa-instagram text-light mx-lg-1 mx-1 fs-5'></i>
            </Link>
            <Link to="https://youtube.com" target='_blank'>
            <i className='fab fa-youtube text-light mx-lg-1 mx-1 fs-5'></i>
            </Link>
        </li>

    {userData ? <>
      <li className="nav-item">
          <Link onClick={handleLogout} className="nav-link text-light">logout</Link>
        </li> 
    </>
     : <>
          <li className="nav-item">
          <Link className="nav-link text-light" to="login">Login</Link>
          </li>
           <li className="nav-item">
          <Link className="nav-link text-light" to="register">Register</Link>
            </li> 
     </>
     }

       
        
      </ul>

    </div>
  </div>
</nav>
  )
}

export default Navbar;