import { Col, Container, Row } from "react-bootstrap";
import { Cards } from "../components/Cards";
import { Searchbar } from "../components/Searchbar";


export function Home(){
    return (
        <Container>
            <Searchbar />
            {/* <Row>
                <Col xs={12} md={12} lg={6}>
                    <Cards />
                </Col>
                <Col xs={12} md={12} lg={6}>
                    <Cards />
                </Col>
            </Row> */}
        </Container>
        
    )
}