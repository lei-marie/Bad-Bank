import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Pages/Home';
import CreateAccount from './Pages/CreateAccount';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Pages/Login';
import AllData from './Pages/AllData';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Nav />
     <Routes>
     <Route path="/" exact element={<Home />}></Route>
     </Routes>
     <Routes>
     <Route path="/createaccount" element={<CreateAccount />}></Route>
     </Routes>
     <Routes>
     <Route path="/login" element={<Login />}></Route>
     </Routes>
     <Routes>
     <Route path="/alldata" element={<AllData />}></Route>
     </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
