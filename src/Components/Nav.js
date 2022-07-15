import React from 'react';
import '../../src/App.css';
import { Link } from 'react-router-dom';

 function Nav() {
   return (
    <nav className="navbar navbar-expand-lg bg-secondary" >
      <div className="container-fluid" >
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" ></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarNav" >
       <ul className="navbar-nav">
        <Link to="/">
         <li  className="nav-link" aria-current="page">Home</li>
        </Link>
        <Link to="/createaccount">
          <li  className="nav-link" aria-current="page">Create Account</li>
        </Link>
        <Link to="/login">
          <li  className="nav-link" aria-current="page">Login</li>
        </Link>
        <Link to="/alldata">
          <li  className="nav-link" aria-current="page">All Data</li>
        </Link>
      </ul>
    </div>
  </div>
</nav>

  );
}

export default Nav;
