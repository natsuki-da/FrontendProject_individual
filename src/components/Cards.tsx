import { CardImg, CardSubtitle, CardText, CardTitle, Col, Row } from "react-bootstrap";

export function Cards (){
    return (
        <Row>
            <Col lg={6}>
              <CardImg></CardImg>
            </Col>
            <Col lg={6}>
              <CardTitle>Hi</CardTitle>
              <CardSubtitle>How Are You?</CardSubtitle>
              <CardText></CardText>
            </Col>
        </Row>
    )
}