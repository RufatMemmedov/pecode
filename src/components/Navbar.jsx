import React from 'react'
import logo from '../assets/image/logo.svg'
import { FaBars } from "react-icons/fa";
import heart from '../assets/image/heart.svg';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="collapse navbar-collapse d-flex justify-content-between " id="navbarSupportedContent">
        <a className="navbar-brand " href="#">
        <img src={logo} alt="PeeCode" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span >
          <FaBars />
        </span>
       
      </button>
          <ul className="navbar-nav  ">
            <li className="nav-item  active">
              <a className="nav-link padding-0,50" href="#"> <img src={heart} alt="" /> Stand with Ukraine <span className="sr-only">(current)</span></a>
            </li>
          </ul>
          <a href="#">
          <ul className="navbar-nav padding-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">What we do</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Career</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>
          </ul>
          </a>
        </div>
    </nav>
  )
}

export default Navbar