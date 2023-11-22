import { Col, Container, Row } from "react-bootstrap";

import { Search } from "./Search";

export function CardsTest ({ fetchData }){

  return (
    <Container>
        <Search />
        fetchData.map((property:any) => (
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
}