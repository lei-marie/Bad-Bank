import React from 'react';
import '../../src/App.css';

 function Nav() {
   return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <img src="https://th.bing.com/th/id/R.19638f7d2862a53527fb673605b18dbd?rik=U9wilM%2bPvhGaaA&pid=ImgRaw&r=0" alt="goldglobe" id="goldGlobe" />
       <a className="navbar-brand" href="#">GOB</a>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
     <div className="navbar-nav">
      <a className="nav-link active" aria-current="page" href="#">Home</a>
      <a className="nav-link active" aria-current="page" href="#">CreateAccount</a>
      <a className="nav-link active" aria-current="page" href="#">Login</a>
      <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Deposit</a>
      <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Withdraw</a>
      <a className="nav-link active" aria-current="page" href="#">AllData</a>
     </div>
    </div>
  </div>
</nav>

  );
}

export default Nav;