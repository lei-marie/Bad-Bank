import React from 'react';
import '../../src/App.css';

function CreateAccount() {

return (
    <div className="container2">
        <div className="card bg-dark text-white" id="card2">
            <img src="https://th.bing.com/th/id/R.03b0dc237a10ba037d3673c93ff16dac?rik=StFhKjrfR2%2bHFQ&pid=ImgRaw&r=0" className="card-img4" alt="mountainview lake" id="accountImage"/>
            <div className="card-img-overlay">
                <h1 className="card-title">Create an Account</h1>
                <br/>
                <br/>
            <div className="mb-3 row">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="password" />
            </div>
            </div> 
            </div>
        </div>
    </div>
);
}

export default CreateAccount; 