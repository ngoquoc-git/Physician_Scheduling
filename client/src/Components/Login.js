import React, {useState} from "react";
import Axios from 'axios'
import './Login.css';

function Login() {

  const [username,setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [loginStatus, setLoginStatus] = useState("")

  const login = () => {
    Axios.post('http://localhost:3001/login', {
      username: username,
      password: password,
    }).then((response) => {
      if(response.data.message) {
        setLoginStatus(response.data.message)
      } else {
        setLoginStatus(response.data[0].user_name)
      }
    });
  };


  return (
    <div className="App">

      <div className="login">
        <h1>Login</h1>
        <input 
          type="text" 
          placeholder="Username..." 
          onChange={(e) => {
            setUsername(e.target.value);
          }}/>
        <input type="password" placeholder="Password..." onChange={(e) => {
            setPassword(e.target.value);
          }}/>
        <button onClick={login}>Login</button>
      </div>

      <h1>{loginStatus}</h1>
    </div>
  );
}

export default Login;
