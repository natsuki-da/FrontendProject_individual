// import { Container, Row } from "react-bootstrap";
import { Button, Container } from "react-bootstrap";
import ArrowL from "/icons/arrowL.svg"
import Heart from "/icons/heart.svg"
import { Description } from "../components/Description";
import { Amenities } from "../components/Amenities";
import { LocationMap } from "../components/Locationmap";
import { Host } from "../components/Host";
import { Reviews } from "../components/Reviews";
// import { Carousels } from "../components/Carousels";


export function Detail(){
    return (
      <Container className="detail-page">
        <div className="buttons-group">
          <div><img className="icon" src={ArrowL} alt="" /></div>
          <div className="genaral-font">Go back</div>
          <div><img className="icon" src={Heart} alt="" /></div>
        </div>

        {/* <Carousels /> */}

        <Button className="booking-button">BOOK NOW</Button>
        
        <div>
          <Description />
          <Amenities />
          <LocationMap />
          <Host />
          <Reviews />
        </div>

      </Container>
  );

}