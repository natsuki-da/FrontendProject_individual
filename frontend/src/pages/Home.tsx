import { Container } from "react-bootstrap";
import { Search } from "../components/Search";
// import { Cards } from "../components/Cards";



export function Home(){
    return (
         <Container>
            <Search />
            {/* <Cards /> */}
                       
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