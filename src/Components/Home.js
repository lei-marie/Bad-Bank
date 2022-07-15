import React from 'react';
import '../../src/App.css';

function Home(){
    return (
      <div className="card">
      <div className="card-body">
        <h5 className="card-title">Bad Bank</h5>
        <p className="card-text">Welcome, to your trusty bank. Your money is always safe with us!</p>
        <p className="card-text"><small className="text-muted"></small></p>
      </div>
      <img src="https://th.bing.com/th/id/R.e44c1e185cef99ea7869bdc9f3a4bf6a?rik=HSJe4jSV%2fZCklw&pid=ImgRaw&r=0" className="card-img-top" alt="Image Front of bank" />
      </div>
    );  
  }

 export default Home;

 