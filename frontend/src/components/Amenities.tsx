import { Col, Container, Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

import DogBK from "/icons/dog-bk.svg"
import PC from "/icons/laptopp.svg"
import Wifi from "/icons/wifi.svg"
import Parking from "/icons/parking.svg"
import Kitchen from "/icons/kitchen.svg"
import BathTub from "/icons/bath_tub.svg"
import Shampoo from "/icons/shampoo.svg"
import Microwave from "/icons/microwave.svg"
import Shower from "/icons/shower.svg"
import Towel from "/icons/towel.svg"
import DogShampoo from "/icons/dog_shampoo.svg"
import DogFood from "/icons/dog_food.svg"
import Cat from "/icons/cat.svg"


export function Amenities(){
    return (
        <Container className="detail-block">
            <Row className="amenity-title">
                <Col lg={6}>
                    <div className="amenity-title fs-4">Amenities</div>
                    <Table borderless className="h-100">
                        <tbody>
                            <tr>
                                <td><img className="amenity-icon" src={PC} /></td>
                                <td className="fs-5">Self check-in</td>
                                <td><img className="amenity-icon" src={BathTub} /></td>
                                <td className="fs-5">Bath tub</td>
                            </tr>
                            <tr>
                                <td><img className="amenity-icon" src={Wifi} /></td>
                                <td className="fs-5">Wifi</td>
                                <td><img className="amenity-icon" src={Shampoo} /></td>
                                <td className="fs-5">Shampoo</td>
                            </tr>
                            <tr>
                                <td><img className="amenity-icon" src={Parking} /></td>
                                <td className="fs-5">Free parking</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><img className="amenity-icon" src={Kitchen} /></td>
                                <td className="fs-5">Kitchen</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col lg={6}>
                    <div className="amenity-title fs-4">Dog amenities<img className="icon" src={DogBK} alt="" /></div>
                    <Table borderless className="h-100">
                        <tbody>
                            <tr>
                                <td><img className="amenity-icon" src={Microwave} /></td>
                                <td className="fs-5">Microwave</td>
                                <td><img className="amenity-icon" src={DogFood} /></td>
                                <td className="fs-5">Dog bowl</td>
                            </tr>
                            <tr>
                                <td><img className="amenity-icon" src={Shower} /></td>
                                <td className="fs-5">Shower</td>
                                <td><img className="amenity-icon" src={Cat} /></td>
                                <td className="fs-5">Cats allower</td>
                            </tr>
                            <tr>
                                <td><img className="amenity-icon" src={Towel} /></td>
                                <td className="fs-5">Towel</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><img className="amenity-icon" src={DogShampoo} /></td>
                                <td className="fs-5">Dog shampoo</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}