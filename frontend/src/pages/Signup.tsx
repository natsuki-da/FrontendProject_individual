import { Container } from "react-bootstrap"
import Dog from "/icons/dog.svg"

export function Signup (){
    return (
        <Container>
            <div className="sign-log-in">
                <div><img src={Dog} height="100px" alt="logo_dog" /></div>
                <div className="title">Sign up</div>
                <input className="input" type="email" placeholder="E-mail address" />
                <input className="input" type="password" placeholder="Password" />
                <button className="button">Sign up</button>
                <div className="message  pe-auto">Already a member? <a href="#">Sign in</a></div>
            </div>
        </Container>
    )
}