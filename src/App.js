import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import CreateAccount from './Components/CreateAccount';
import 
import Deposit from './Components/Deposit';
import Withdraw from './Components/Withdraw';
import Login from './Components/Login';
import AllData from './Components/AllData';

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
     <Route path="/deposit" element={<Deposit />}></Route>
     </Routes>
     <Routes>
     <Route path="/withdraw" element={<Withdraw />}></Route>
     </Routes>
     <Routes>
     <Route path="/alldata" element={<AllData />}></Route>
     </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
