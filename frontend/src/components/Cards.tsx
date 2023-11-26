import { Col, Row } from "react-bootstrap";

export function Cards ({ property }){
  return (
      <Row key={property.id} className="card">
        <Col lg={6}>
          <a href="/detail">
             <img src={`/images/${property.imgName}`} className="card-image"></img>
          </a>
        </Col>
        <Col lg={6}>
          <h3 className="property-name">{property.name}</h3>
          <div className="conditions"></div>
          <div className="description">{property.description}</div>
          <div className="tag">{property.type}</div>
          <div className="price fs-5">{property.price} SEK/night</div>
        </Col>              
      </Row>
  
  )
}



//     return (
//       <Container>
//         <Row className="card">
//           <Col lg={6}>
//             <img className="card-image" />
//           </Col>
//           <Col lg={6}>
//             <h4>
//               Name
//             </h4>
//             <div className="price fs-5">
//               Price
//             </div>
//             <div className="conditions">
//             </div>
//             <div className="tag">
              
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     )
// }