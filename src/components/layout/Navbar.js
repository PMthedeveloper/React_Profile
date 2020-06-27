import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container">
  <div class="container-fluid">
    <Link class="navbar-brand" href="/">Profile app</Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link" aria-current="page" to="/">Home</Link>
        <Link class="nav-link" aria-current="page" to="/about">About Us</Link>
        <Link class="nav-link" aria-current="page" to="/contact">Contact Us</Link>
      </div>
    </div>
  <Link to="/users/add" className="btn btn-outline-light">Create User</Link>
  </div>
  </div>

</nav>
        </>
    )
}

export default Navbar;