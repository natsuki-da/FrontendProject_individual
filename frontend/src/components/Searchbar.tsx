import { Container} from "react-bootstrap";
import Pin from "/icons/pin.svg";
import Calender from "/icons/calender.svg";
import  Human from "/icons/human.svg";
import  Magnifying from "/icons/magnifying.svg";
import {useState} from 'react';
// import moment from "moment"
// import { DateRangePicker } from "react-dates";
// import "react-date-range/dist/styles.css"; // main css file
// import "react-date-range/dist/theme/default.css"; // theme css file
// import { format } from "date-fns";


export function Searchbar(){
   
    const[startDate, setStartDate] = useState(ned Date());
    // const[endDate, setEndDate] = useState(new Date());

    // const selectionRange = {
    //     startDate: startDate,
    //     endDate: endDate,
    //     key: "selection",
    // };

    // function handleSelect(ranges){
    //     setStartDate(ranges.selection.startDate);
    //     setEndDate(ranges.selection.endDate);
    }
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
    );

};