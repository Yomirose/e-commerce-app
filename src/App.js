import Login from "./page/Login/Login";
import Home from "./page/Home/Home";
import Create from "./page/CreateAccount/Create";
// import Password from "./page/PasswordReset/Password"
import {Routes, Route} from "react-router-dom";
import { useState } from "react";


function App() {
  const [userData, setUserData, getUserData] = useState(null);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login setUserData={setUserData} />} />
        <Route path="/home" element={<Home userData={userData} />} />
        <Route path="/Create" element={<Create getUserData={getUserData} />} />
      </Routes>
    </div>
  );
}

export default App;
