import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [userNameReg, setNameReg] = useState("")
  const [passwordReg, setPasswordReg] = useState("")

  const register = () => {
    Axios.post('http://localhost:3001/register', {
      username: userNameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="App">
      
     
      <div>Sign Up</div>
      <label>Username </label>
      <input type="text" placeholder="Username"
        onChange={(e)=>{
          setNameReg(e.target.value);
        }} 
      ></input>
      <br />
      <label>Password  </label>
      <input type="password"
        onChange={(e)=>{
          setPasswordReg(e.target.value);
        }} 
      ></input>
      <br />
      <button onClick={register}>Register</button>    

      
      
      <div>Sign In</div>
      <label>Username </label>
      <input type="text" placeholder="Username"></input>
      <br />
      <label>Password  </label>
      <input type="password" placeholder="Password"></input>
      <br />
      <button type="submit">Log In</button>
    </div>
  );
}

export default App;
