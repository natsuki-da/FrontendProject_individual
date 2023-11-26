// import { Col, Container, Row } from "react-bootstrap";
import { Button, Col, Container, Row } from "react-bootstrap";
import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from 'react-date-range';
import { useNavigate } from "react-router-dom";
// import "react-date-range/dist/styles.css"; 
// import "react-date-range/dist/theme/default.css"; 

export function BookingInfo(){
// const location = useLocation();
const [openDate, setOpenDate] = useState(false);
const [dates, setDates] = useState([
  {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  },
]);

const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
function dayDifference(date1:any, date2:any) {
  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
  return diffDays;
}

const days = dayDifference(dates[0].endDate, dates[0].startDate);

const navigate = useNavigate();
const handleClick = () => {
  navigate("/confirm")
}

    return (
      <Container className="detail-block-right">
        <Row>
          <Col>
            <div className="detail-price">1,200 SEK/night</div>
            <div className="header">
              <div className="headerSearchItem">
                <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">
                  {`${format(dates[0].startDate, "MM/dd/yyyy")} to 
                    ${format(dates[0].endDate, "MM/dd/yyyy")}`}
                </span>
              </div>
              <div>
                {openDate && (
                  <DateRange
                  editableDateInputs={true}
                  onChange={(item:any) => setDates([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={dates}
                  className="date"
                  minDate={new Date()}
                  />
                )}
              </div>
            </div>
            <div className="calculation">1200SEK x {days}nights</div>
            <b className="calculation-total">Total: {days * 1200}SEK</b>
            <Button className="booking-button-sm" onClick={handleClick}>Contact Host</Button>
          </Col>
        </Row>
      </Container>
    );
};