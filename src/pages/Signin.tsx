import { Button, Container } from "react-bootstrap"
import "../app.css"
import Dog from "/images/dog.svg"

function Signin (){
    return (
        <Container>
            <div className="sign-log-in">
                <img src={Dog} height="100px" alt="logo_dog" />
                <div>Sign in</div>
                <input type="email" placeholder="E-mail address" />
                <input type="password" placeholder="Password" />
                <Button variant="primary">Sign in</Button>
                
                <div>Not a member?</div>
                
            </div>
        </Container>
    )
}

export default Signin