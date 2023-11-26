import { Col, Row, Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Map from "/images/map.png"
import DogWalk from "/icons/walking_dog.svg"

export function LocationMap(){
    return (
        <Container className="detail-block">
            <Row>
                <Col lg={7}>
                    <div><img className="map" src={Map}  /></div>
                </Col>
                <Col lg={5}>
                    <div className="neighbor-info fs-4">Pet-friendly Neighborhoods</div>
                    <Table borderless className="h-50">
                        <tbody>
                            <tr>
                                <td className="fs-5"><img className="amenity-icon" src={DogWalk} />Pub 447</td>
                                <td className="neighbor-detail fs-5 font-italic">5 mins walk</td>
                            </tr>
                            <tr>
                                <td className="fs-5"><img className="amenity-icon" src={DogWalk} />Cafe</td>
                                <td className="neighbor-detail fs-5">7 mins walk</td>
                            </tr>
                            <tr>
                                <td className="fs-5"><img className="amenity-icon" src={DogWalk} />Park</td>
                                <td className="neighbor-detail fs-5">15 mins walk</td>
                            </tr>
                            <tr>
                                <td className="fs-5"><img className="amenity-icon" src={DogWalk} />Pet store</td>
                                <td className="neighbor-detail fs-5">30 mins walk</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}