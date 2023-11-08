import { Container } from "react-bootstrap"
import Dog from "/icons/dog.svg"

export function Signin (){
    return (
        <Container>
            <div className="sign-log-in">
                <div><img src={Dog} height="100px" alt="logo_dog" /></div>
                <div className="title">Sign in</div>
                <input className="input" type="email" placeholder="E-mail address" />
                <input className="input" type="password" placeholder="Password" />
                <button className="button">Sign in</button>
                <div className="message  pe-auto">Not a member? <a href="#">Sign up</a></div>
            </div>
        </Container>
    )
}