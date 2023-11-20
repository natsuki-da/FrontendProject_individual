// import { CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Row } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";

import { useFetch } from "../hooks/useFetch";

export function Cards (){
  const {data, loading } = useFetch("http://localhost:5000/api/property/get")
    console.log(data)
  return (
    <Container>
      { loading ? ("Loading...please wait") : 
             (
                data.map((property:any) => (
                  <Row key={property.id} className="card">
                    <Col lg={6}></Col>
                    <Col lg={6}>
                      <h4>{property.name}</h4>
                      <div className="price fs-5">{property.price}</div>
                      <div className="conditions"></div>
                      <div className="tag">{property.type}</div>
                    </Col>
                  </Row>
                )
                )
             )}
    </Container>
  )



    // return (
    //   <Container>
    //     <Row className="card">
    //       <Col lg={6}>
    //         <img className="card-image" />
    //       </Col>
    //       <Col lg={6}>
    //         <h4>
    //           Name
    //         </h4>
    //         <div className="price fs-5">
    //           Price
    //         </div>
    //         <div className="conditions">
    //         </div>
    //         <div className="tag">
              
    //         </div>
    //       </Col>
    //     </Row>
    //   </Container>
    // )
}