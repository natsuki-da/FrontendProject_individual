import { Container} from "react-bootstrap";
import Pin from "/icons/pin.svg";
import Calender from "/icons/calender.svg";
import  Human from "/icons/human.svg";
import  Magnifying from "/icons/magnifying.svg";
import { DateRange } from "react-date-range";
import {useState} from 'react'

export function Searchbar(){
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ]);
    return (
        <Container>
            <div className="searchbar">
                <div className="search-field">
                    <img className="search-icons" src={Pin} alt=""/>
                    <input className="search-inputs" type="search" placeholder="Enter destination" />
                </div>
                <div className="search-field">
                    <img className="search-icons" src={Calender} alt=""/>
                    <span className="search-inputs">Choose dates</span>
                    {/* <input className="search-inputs" type="date" placeholder="Choose dates" /> */}
                    <DateRange className="search-calender" editableDateInputs={true} onChange={item => setState([item.selection])} moveRangeOnFirstSelection={false} ranges={date} />
                </div>
                <div className="search-field">
                    <img className="search-icons" src={Human} alt=""/>
                    <input className="search-inputs" type="number" placeholder="Travelers"/>
                </div>
                    <button className="search-button">
                        <img src={Magnifying} />
                    </button>
            </div>
        </Container>
    )
}