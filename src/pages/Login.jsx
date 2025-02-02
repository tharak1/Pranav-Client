import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import {Link} from 'react-router-dom';
import { useGetUserID } from "../hooks/useGetUserID";

import '../styles/Login.css';

export const Login =  ()=>{



    let config = {
        headers: {
          'Authorization': 'Bearer ' + useGetUserID()
        }
      }

    const [ , setCookies] = useCookies(["access_token"]);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const auth = async(event)=>{
        event.preventDefault();
        try{
            const token = await axios.post("http://localhost:5000/api/user/login",{
                email,
                password
            });
            console.log(token.data.token);
            setCookies("access_token", token.data.token);
            window.localStorage.setItem("userID", token.data.token);

            if(token.status === 200){
                const result1 = await axios.get("http://localhost:5000/api/userdata/",        
                {headers: {
                    'Authorization': 'Bearer ' + token.data.token
                }}
            );
                console.log(result1);
            }
            
            navigate("/dashboard/performance");
        }
        catch(err){
            console.log(err);
        }
        
    };


    return (
        <>
            <div className="container">
                <div className="left-container">
                    <div className="logo">
                        <h1>HELLO FRESH</h1>
                    </div>
                    <form onSubmit={auth}>
                        <div className="field input-field">
                        <input type="text" name="email" value={email} onChange={(event)=>{setEmail(event.target.value)}} className="input-taking" placeholder="email" />
                        </div>
                        <div className="field input-field">
                        <input type="text" name="password" value={password} onChange={(event)=>{setPassword(event.target.value)}} className="input-taking" placeholder="password"/>
                        </div>
                        <div className="field input-button">
                        <input type="submit" value="Login" className="login-button" />
                        </div>
                    </form>
                    
                    <div className="register-section">
                        <p>dont have an account ?</p>
                        <Link to="/register"><button className="register-button">register</button></Link>
                        
                    </div>
                </div>

                <div className="right-container">
                    <img src={require("../assets/homebackground.jpg")} alt="" />
                </div>
            </div>
        </>
    );
}