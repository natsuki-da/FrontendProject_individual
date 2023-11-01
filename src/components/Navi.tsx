import { Container, Navbar } from "react-bootstrap"
import Logo from "/images/petstay.svg"

export function Navi (){
    return (
        <Navbar sticky="top" className="bg-body-danger-subtle">
            <Container>
                <img src={Logo} height="50px" alt="logo"/>
            </Container>
        </Navbar>
    )
}