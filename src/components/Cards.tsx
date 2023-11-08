// import { CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Row } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";

export function Cards (){
    return (
      <Container>
        <Row className="card">
          <Col lg={6}>
            <img className="card-image" />
          </Col>
          <Col lg={6}>
            <h4>
              Name
            </h4>
            <div className="price fs-5">
              Price
            </div>
            <div className="conditions">
            </div>
            <div className="tag">
              
            </div>
          </Col>

            {/* <Col lg={6}>
              <CardImg src={House1}></CardImg>
            </Col>
            <Col lg={6}>
              <CardTitle>Hi</CardTitle>
              <CardSubtitle>How Are You?</CardSubtitle>
              <CardText></CardText>
            </Col> */}
        </Row>
      </Container>
    )
}