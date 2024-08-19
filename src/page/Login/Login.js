import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useState } from "react";
import "./Login.css";

function Login({setUserData}) {
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate();


  function handleUserLogin(e){
    e.preventDefault();

    setLoading(true);
    fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        
        username: username,
        password: password,
        expiresInMins: 30, // optional, defaults to 60
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.message === "Invalid credentials"){
        setError(data.message);
      } else {
        setUserData(data);
        navigate("/home");
        // navigate("/Create");
      }      
    }).catch((error) => {
      setError(error.message || "Something went wrong. Try again.");
    }
    ).finally(()=>{
      setLoading(false);
    });
    
  }

  function handleUsernameChange(e){
    setUsername(e.target.value);
  }

  function handleEmailChange(e){
    setUserEmail(e.target.value);
  }

  function handlePasswordChange(e){
    setPassword(e.target.value);
  }



    return (
        <div className="login-container">
      <h2>Login to Your Account</h2>
      <form onSubmit={handleUserLogin}>
        <div>
          <label className="form-label">Username</label>
          <input className="form-input" type="text" placeholder="Enter your Username" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label className="form-label"> Email</label>
          <input className="form-input" type="text" placeholder="Enter your email" value={userEmail} onChange={handleEmailChange} />
        </div>
        <div className="input-password">
          <label className="form-label">Password</label>
          <input className="form-input" type="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} />
        </div >
        <button className="form-button" type="submit">Login {loading ? <ClipLoader size={20} color={"whit"}/> : ""}</button>
        <span style={{color: "red", fontSize: "15px"}}>{error}</span>
      </form>
      <div className="forgot-password">
        <a href="#">Forgot your password?</a>
      </div>
    </div>
    )
}

export default Login