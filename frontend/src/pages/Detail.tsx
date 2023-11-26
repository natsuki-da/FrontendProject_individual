import { Button, Col, Container, Row } from "react-bootstrap";
import ArrowL from "/icons/arrowL.svg"
// import Heart from "/icons/heart.svg"
import { Description } from "../components/Description";
import { Amenities } from "../components/Amenities";
import { LocationMap } from "../components/Locationmap";
import { Host } from "../components/Host";
import { Carousels } from "../components/Carousels";
import { BookingInfo } from "../components/BookingInfo";



export function Detail(){
    return (
      <Container className="detail-page">
        <div className="buttons-group">
          <div><img className="icon" src={ArrowL} alt="" /></div>
          <div className="genaral-font"><a href="/" className="hyperlink">Go back</a></div>
          {/* <div><img className="icon" src={Heart} alt="" /></div> */}
        </div>

        <Carousels />

        <Button className="booking-button">Contact Host</Button>
        
        <Row className="block">
          <Col lg={8}><Description /></Col>
          <Col lg={4}><BookingInfo /></Col>
         
        </Row>
          <Amenities />
          <LocationMap />
          <Host />


      </Container>
  );

}