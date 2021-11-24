import React, {useState} from "react";
import Axios from 'axios'
import './Register.css';

function Register () {

    const [usernameReg,setUsernameReg] = useState("")
    const [passwordReg, setPasswordReg] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [dob, setDob] = useState("")
    const [address, setAddress] = useState("")

    const register = () => {
        Axios.post('http://localhost:3001/register', {
            first_name: firstName,
            last_name: lastName,
            phone: phone,
            dob: dob,
            address: address,
            username: usernameReg,
            password: passwordReg,
        }).then((response) => {
          console.log(response);
        });
    };

    return (
        <div className="App">
            <div className="registration">
                <h1>Registration</h1>
                <label>Username</label>
                <input type="text" onChange={(e) => {
                    setUsernameReg(e.target.value);
                }}
                />
                <label>Password</label>
                <input type="text" onChange={(e) => {
                    setPasswordReg(e.target.value);
                }}
                />
                <label>Address</label>
                <input type="text" onChange={(e) => {
                    setAddress(e.target.value);
                }}
                />
                <label>First Name</label>
                <input type="text" onChange={(e) => {
                    setFirstName(e.target.value);
                }}
                />
                <label>Last Name</label>
                <input type="text" onChange={(e) => {
                    setLastName(e.target.value);
                }}
                />
                <label>Phone</label>
                <input type="text" onChange={(e) => {
                    setPhone(e.target.value);
                }}
                />
                <label>Date Of Birth</label>
                <input type="text" onChange={(e) => {
                    setDob(e.target.value);
                }}
                />
                <button onClick={register}>Register</button>
            </div>
        </div>
    );
}

export default Register;