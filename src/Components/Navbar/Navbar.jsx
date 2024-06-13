import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import'./Navbar.css'
import { UserContext } from '../UserContext/UserContext'

export default function Navbar() {
  // let{userToken}=useContext(UserContext)
  return <>

  <nav className="navbar navbar-expand-lg fixed-top py-3">
        <div className="container ">
          <Link to="#" className="navbar-brand text-light fw-bolder" ><i className="fa-solid fa-pencil" ></i> AL-QALAM
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link to="/Home" className="nav-link active text-light"  >Home</Link>
              </li>
              <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Our Tracks
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item"to="/SubjectArabic">Arabic</Link></li>
            <li><Link class="dropdown-item"to="/SubjectReligion">Religion</Link></li>
            <li><Link class="dropdown-item"to="#">History</Link></li>
          </ul>
        </li>
              <li className="nav-item">
                <Link to="#" className="nav-link active text-light"  >About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link active text-light"  >Contact</Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link to="/SignUp" className="nav-link active text-light"  >Register Now</Link>
              </li>
              <li className="nav-item">
                <Link to="/LoginPage" className="nav-link text-light">Log In</Link>
              </li>
             
              
            </ul>
          </div>
        </div>
      </nav>
  
  
  </>
}
