import { Container } from "react-bootstrap"
import Dog from "/icons/dog.svg"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function Signup (){
    const [userName, setUsername] = useState("");
    const [userEmail, setEmail] = useState("");
    const [userPassword, setPassword] = useState("");
    const navigate = useNavigate();

    //Register user via API
    const register = (e: React.FormEvent) => {
        e.preventDefault();
        // console.log("hej")
        axios.post("http://localhost:5000/api/auth/signup", {
            username: userName, 
            email: userEmail, 
            password: userPassword,
        })
        .then(()=> navigate("/home-loggedin"))
    };

    return (
        <Container>
            <div className="sign-log-in">
                <div><img src={Dog} height="100px" alt="logo_dog" /></div>
                <div className="title">Sign up</div>
                <form onSubmit={register}>
                    <input className="input" type="username" placeholder="User name" onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {setUsername(e.target.value);}} required/>
                    <input className="input" type="email" placeholder="E-mail address" onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{setEmail(e.target.value);}} required/>
                    <input className="input" type="password" placeholder="Password" onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{setPassword(e.target.value);}} required/>
                    <button className="button">Sign up</button>
                </form>
                <div className="message  pe-auto">Already a member? <a href="#">Sign in</a></div>
            </div>
        </Container>
    )
}