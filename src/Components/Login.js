import React from 'react';
import '../../src/App.css';

function Login() {

return (
    <div className="container2">
        <div className="card bg-dark text-white" id="card2">
            <img src="https://th.bing.com/th/id/R.89262c288d0f23a225c937c8be8d8d7d?rik=iWuzU1ON7KGMWw&riu=http%3a%2f%2fstatic.guim.co.uk%2fsys-images%2fGuardian%2fPix%2fpictures%2f2014%2f7%2f23%2f1406125905554%2f728a6617-4e37-47f7-8245-98faa6bdb3f7-2060x1373.jpeg&ehk=etH19e9vE2LAwci4IqOuxtuZVYEAb%2bvCrCfAYFfSyss%3d&risl=&pid=ImgRaw&r=0" className="card-img5" alt="oceanwave" id="loginImage"/>
            <div className="card-img-overlay">
                <h1 className="card-title">Login</h1>
                <br/>
                <br/>
            <div className="mb-3 row">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Username</label>
                <input type="username" className="form-control" id="exampleFormControlInput1" placeholder="Username" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="password" />
                <button type="submit" className="btn btn-light" id="btn2">Login</button>
            </div>
            </div> 
            </div>
        </div>
    </div>
);
}

export default Login;

