import React from 'react';
import '../../src/App.css';

function Home(){
    return (
      <>
      <h1 className="header1"> Welcome to GlobalOne Bank</h1>

      <div className="card bg-dark text-white" id="body1">
        <img src="https://static.vecteezy.com/system/resources/previews/002/091/582/large_2x/global-network-connection-world-map-point-and-line-composition-concept-of-global-business-illustration-vector.jpg" className="card-img1" alt="worldmap" />
        <div className="card-img-overlay">
         <h3 className="card-title">Taking your money further</h3>
         <p className="card-text">Savings Checking Investing Retirement </p>
         <img src="https://cepis.org/app/uploads/2020/01/connected-europe-scaled.jpg" className="card-img2" alt="worldmap" />
         <img src="https://www.wgtn.ac.nz/__data/assets/image/0008/718541/rsz-multi-cultural-face-nz.jpg" className="card-img3" alt="hands" />
         <br/>
         <a href="/login" className="btn btn-primary" id="button1">Sign up!</a>
        </div>
      </div>
      
      </>
    );  
  }
 export default Home;