import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/App.css';

 function Nav() {
   return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
       <a className="navbar-brand" href="/"><img src="https://th.bing.com/th/id/R.6592a30ad853dc586e60a5ac14d90827?rik=gcEfDVKINSo7QA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f9c4%2fLky%2f9c4Lkyqni.png&ehk=QEZ47jasuUzGUXFVHRt%2bAyfMudGqEa4pyVvXwLIde4M%3d&risl=&pid=ImgRaw&r=0" alt="globe" style={{width: 35+ 'px', opacity: .7}} /></a>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li id="home" className="nav-item">
            <Link data-toggle="pill" className="nav-link hovertext" data-hover="Home page" to="/">Home</Link>
          </li>
          <li id="createAccount" className="nav-item">
            <Link data-toggle="pill" className="nav-link hovertext" data-hover="Register here" to="createAccount">Create Account</Link>
          </li>
          <li id="deposit" className="nav-item">
            <Link data-toggle="pill" className="nav-link hovertext" data-hover="Deposit funds" to="deposit">Deposit</Link>
          </li>
          <li id="withdraw" className="nav-item">
            <Link data-toggle="pill" className="nav-link hovertext" data-hover="Withdraw funds" to="withdraw">Withdraw</Link>
          </li>
          <li id="allData" className="nav-item">
            <Link data-toggle="pill" className="nav-link hovertext" data-hover="User database"  to="alldata">All Data</Link>
          </li>          
        </ul>
      </div>
  </div>
</nav>

  );
}

export default Nav;