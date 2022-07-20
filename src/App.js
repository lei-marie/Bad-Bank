import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import CreateAccount from './Components/CreateAccount';
import Deposit from './Components/Deposit';
import Withdraw from './Components/Withdraw';
import Login from './Components/Login';
import AllData from './Components/AllData';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import {UserContext} from './Components/context'

function App() {
  return (
    <>
    <BrowserRouter>
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}} >
      <div className="app-container">
              <Nav />
              <div className="content-container">
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/createaccount" element={<CreateAccount  />} />
                      <Route path="/deposit" element={<Deposit  />} />
                      <Route path="/withdraw" element={<Withdraw />} />
                      <Route path="/alldata" element={<AllData />} />
                  </Routes>
              </div>
          </div >
      </UserContext.Provider>
    </BrowserRouter>
    
    </>
  );
}

export default App;