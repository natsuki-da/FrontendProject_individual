import { Col, Row } from "react-bootstrap";
import { Cards } from "../components/Cards";

function Home(){
    return (
        <Row>
            <Col xs={12} md={12} lg={6}>
                <Cards />
            </Col>
            <Col xs={12} md={12} lg={6}></Col>
        </Row>
    )
}

export default Home