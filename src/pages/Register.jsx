import axios from "axios";
import { useEffect, useState } from "react";

import "../styles/Login.css"
import {Link} from "react-router-dom"
export const Register = ()=>{

    

    
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword]  = useState("");

    const auth = async (event)=>{
        event.preventDefault();

        const result = await axios.post("http://localhost:5000/api/user/register",{
            username,
            email,
            password,
        });
        console.log(result);
        
            const token = await axios.post("http://localhost:5000/api/user/login",{
                email,
                password
            });
            console.log(token.data.token);
            fetch("http://localhost:5000/api/userdata/",{
                    method: 'PUT',
                    headers: {
                        'Authorization':  'Bearer ' + token.data.token
                    },
                }).then(res => console.log(res));
            fetch("http://localhost:5000/api/userinfo/",{
                method: 'POST',
                headers: {
                    'Authorization':  'Bearer ' + token.data.token
                },
            }).then(res => console.log(res));


            
    }




    return (
        <>
            <div className="conatiner" style={{display:"flex"}}>
                <div className="left-container">
                <div className="logo">
                        <h1>HELLO FRESH</h1>
                    </div>
                    <form onSubmit={auth}>
                    <div className="field input-field">
                        <input type="text" name="username" value={username} onChange={(event)=>{setUsername(event.target.value)}} id="username" className="input-taking" placeholder="username"  />
                    </div>
                    <div className="field input-field">
                        <input type="text" name="email" value={email} onChange={(event)=>{setEmail(event.target.value)}} id="email"  className="input-taking" placeholder="email"/>
                    </div>
                    <div className="field input-field">
                    <input type="text" name="password" value={password} onChange={(event)=>{setPassword(event.target.value)}} id="password " className="input-taking" placeholder="password" />
                    </div>
                    <div className="field input-button">
                    <input type="submit" value="register" className="register-button" />
                    </div>
                    </form>
                    <div className="register-section">
                        <p>already have an account ?</p>
                        <Link to="/Login"><button className="register-button">Login</button></Link>
                        
                    </div>
                </div>

                <div className="right-container">
                <img src={require("../assets/homebackground.jpg")} alt="" />
                </div>
            </div>
        </>
    );
}