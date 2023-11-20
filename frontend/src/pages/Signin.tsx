import { Container } from "react-bootstrap"
import Dog from "/icons/dog.svg"
import axios from "axios"
import { useState } from "react";

export function Signin (){
    const [userEmail, setEmail] = useState("");
    const [userPassword, setPassword] = useState("");
    
    const login = () => {
        const r = axios.get("http://localhost:5000/api/auth/signin",
            {
                params: {
                    email: userEmail,
                    password: userPassword
                }
            })
        
    };

    return (

        <Container>
            <div>{r.data}</div>
            <div className="sign-log-in">
                <div><img src={Dog} height="100px" alt="logo_dog" /></div>
                <div className="title">Sign in</div>
                <form onSubmit={login}>
                    <input className="input" type="email" placeholder="E-mail address" onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {setEmail(e.target.value);}}/>
                    <input className="input" type="password" placeholder="Password" onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {setPassword(e.target.value);}}/>
                    <button className="button">Sign in</button>
                </form>
                <div className="message  pe-auto">Not a member? <a href="#">Sign up</a></div>
            </div>
        </Container>
    )
}