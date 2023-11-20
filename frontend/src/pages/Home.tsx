import { Col, Container, Row } from "react-bootstrap";
import { Cards } from "../components/Cards";
// import { Container, Row } from "react-bootstrap";

// import { Searchbar } from "../components/Searchbar";
// import { useFetch } from "../hooks/useFetch";


export function Home(){
    // const {data, loading } = useFetch("http://localhost:5000/api/property/get")
    // console.log(data)
    return (
         <Container>
            {/* { loading ? ("Loading...please wait") : 
             (
                data.map((property:any) => (
                    <>
                    <h2>{property.name}</h2>
                    <div>{property.type}</div>
                    <div>{property.city}</div>
                    </>
                )
                )
             )} */}
             
             <Row> 
                <Col xs={12} md={12} lg={6}>
                    <Cards />
                </Col>
                <Col xs={12} md={12} lg={6}>
                    <Cards />
                </Col>
            </Row>
        </Container>
        //     {/* <Searchbar /> */}
        //     { loading ? ("Loading...please wait") : 
        //     (
        //     <>
        //     <div>{data[0].name}</div>
                
        //     <Row>
                
        //         {/* <Col xs={12} md={12} lg={6}>
        //             <Cards />
        //         </Col>
        //         <Col xs={12} md={12} lg={6}>
        //             <Cards />
        //         </Col> */}
        //     </Row> </>
        //     )}
        // </Container>
    )
}