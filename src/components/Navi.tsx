import { Container, Navbar } from "react-bootstrap"
import Logo from "/icons/petstay.svg"
import Human from "/icons/human.svg"

export function Navi (){
    return (
        <Navbar sticky="top" className="bg-white shadow-sm mb-5 p-4">
            <Container> 
                <div><img src={Logo} height="50px" alt="logo"/></div>
                <div className="pe-auto">
                    <img src={Human} /> 
                    <a href="#">Sign in</a>
                    <a href="#"> / Sign up</a>
                </div>
            </Container>
        </Navbar>
    )
}