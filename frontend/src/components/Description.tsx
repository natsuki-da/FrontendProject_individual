import { Col, Container, Row } from "react-bootstrap";

export function Description (){
    return (
        <Container className="detail-block-left">
            <Row>
                <Col xs={8} md={8} lg={7} className="descrip">
                    <h3>Pocono Mountain KOA</h3>
                    <div className="text-lg">
                        Pocono Mountain KOA is located in the Pocono Mountains, just a half mile from Shawnee Mountain Ski Area. 
                        It's also in close proximity to the Delaware Water Gap National Recreation Area which is a great stop for canoeing, kayaking, and hiking with doggies. 
                        The campground has 50 amp service available, and can accommodate rigs up to 85 feet. 
                    </div>
                </Col>
                <Col xs={4} md={4} lg={5} className="pet-policy">
                    <h4>Pet policy: </h4>
                    <div className="text-md">
                        Dogs are allowed at Pocono Mountain KOA, but they must be kept on a leash no longer than 6 feet when outside your vehicle. 
                        Dogs are allowed at the tent sites at no charge, and at the cabins for a $10 pet fee. 
                        Dogs should not be left unattended at the campsites. 
                        There are no weight limitations. 
                    </div>
                </Col>
            </Row>
        </Container>
    )
}