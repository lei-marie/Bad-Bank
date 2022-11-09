import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import CreateAccount from "./Components/CreateAccount";

import Deposit from "./Components/Deposit";
import Withdraw from "./Components/Withdraw";
import AllData from "./Components/AllData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./utils/context";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <UserContext.Provider
          value={{
            users: [
              {
                name: "Abel",
                email: "abel@mit.edu",
                password: "secret",
                balance: 100,
              },
            ],
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createaccount" element={<CreateAccount />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/alldata" element={<AllData />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
