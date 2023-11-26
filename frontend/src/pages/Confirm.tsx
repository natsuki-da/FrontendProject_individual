import { Col, Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function Confirm (){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/sent")
}
    return (
       <Container className="confirm-form">
        <Row>
            <p className="message">Once Christina has confirmed a request from you, she'll get back to you with further information regarding payment.</p>
        </Row>
        <Row>
            <Col className="confirm-inputs">
            <input className="confirm-input-name" type="text" placeholder="Your name" required/>
            </Col>
        </Row>
        <Row>
            <Col className="confirm-inputs">
            <input className="confirm-input-email" type="email" placeholder="Email" required/>
            </Col>
        </Row>
        <Row>
            <Col className="confirm-inputs">
            <input className="confirm-input-text" type="text" placeholder="Message to host" required/>
            </Col>
        </Row>
        <Row>
            <Col className="confirm-inputs">
            <Button className="confirm-button" onClick={handleClick}>SEND</Button>
            </Col>
        </Row>

        
       </Container>
    )
}