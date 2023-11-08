import { Col, Row, Container } from "react-bootstrap";
import Map from "/images/map.png"

export function LocationMap(){
    return (
        <Container className="detail-block">
            <Row>
                <Col lg={7}>
                    <div><img className="map" src={Map}  /></div>
                </Col>
                <Col lg={5} className="neighbor-info bg-danger">
                    <div className="fs-4">Pet-friendly Neighborhoods</div>
                </Col>
            </Row>
        </Container>
    )
}