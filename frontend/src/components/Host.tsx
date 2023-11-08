import { Col, Container, Row } from "react-bootstrap";
import Hostpic from "/images/hostpic.png"
import Star_filled from "/icons/star_filled.svg"
export function Host (){
    return (
        <Container className="detail-block">
            <Row>
                <Col lg={4} className="host">
                    <div className="fs-5">Hi, I'm your furry host!</div>
                    <div><img src={Hostpic} alt="host" /></div>
                    <div className="fs-3">Christina</div>
                    <div className="fs-5"><img src={Star_filled} alt="" />4.3</div>
                </Col>
                <Col lg={8} className="bg-danger">
                    <div className="fs-4">Frequently Asked Questions to Christina:</div>
                    <div className="fs-5">What are the cleanliness and hygiene measures currently in place at your place?</div>
                </Col>
            </Row>
        </Container>
    )
}