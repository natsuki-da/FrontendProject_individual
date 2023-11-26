import { Container, Navbar } from "react-bootstrap"
import Logo from "/icons/petstay.svg"
import Human from "/icons/human.svg"
// import { NavLink } from "react-router-dom"

export function Navi (){
    return (
        <Navbar sticky="top" className="bg-white shadow-sm mb-5 p-4">
            <Container> 
                <div><a href="/"><img src={Logo} height="50px" alt="logo"/></a></div>
                <div className="pe-auto">
                    <img src={Human} />
                    {/* <Nav.Link as={NavLink} to={"/signin"}>Sign in</Nav.Link>
                    <Nav.Link as={NavLink} to={"/signup"}>Sign up</Nav.Link> */}
                    <a href="/signin" className="hyperlink">Sign in</a>
                    <a href="/signup" className="hyperlink"> / Sign up</a>
                </div>
            </Container>
        </Navbar>
    )
}