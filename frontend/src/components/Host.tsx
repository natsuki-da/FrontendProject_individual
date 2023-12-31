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
                <Col lg={8}>
                    <div className="faq-title fs-4">Frequently Asked Questions to Christina:</div>
                    <div>
                        <a href="#"><div className="fs-5">What are the cleanliness and hygiene measures currently in place at your place?</div></a>
                        <a href="#"><div className="fs-5">Can more than one dog stay?</div></a>
                        <a href="#"><div className="fs-5">How much does it cost for 1 dog to stay at your place?</div></a>
                        <a href="#"><div className="fs-5">Do you have any welcome box for a dog?</div></a>
                        <a href="#"><div className="fs-5">Can I take my furry friends such as rabbits with me?</div></a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}