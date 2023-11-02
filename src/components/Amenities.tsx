import { Col, Container, Row } from "react-bootstrap";
import DogBK from "/icons/dog-bk.svg"

export function Amenities(){
    return (
        <Container className="detail-block">
            <Row>
                <Col lg={6}>
                    <div className="fs-4">Amenities</div>
                </Col>
                <Col lg={6}>
                    <div className="fs-4">Dog amenities<img className="icon" src={DogBK} alt="" /></div>
                </Col>
            </Row>
            <Row className="amenity-icon">
                <Col lg={3}>Hello</Col>
                <Col lg={3}>Hello</Col>
                <Col lg={3}>Hello</Col>
                <Col lg={3}>Hello</Col>
            </Row>
        </Container>
    )
}