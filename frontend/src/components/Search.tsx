import { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import Pin from "/icons/pin.svg";
import  Magnifying from "/icons/magnifying.svg";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { useFetch } from "../hooks/useFetch";
import { Cards } from "./Cards";

export function Search (){
    const {data, loading } = useFetch("http://localhost:5000/api/property/get")
    console.log(data)

    const [fetchData, setFetchData] = useState([]);
    const ref = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // console.log(ref.current.value);

        axios.get(`http://localhost:5000/api/get/search/${ref.current.value}`)
            .then(({data}) => {
                // console.log(data)
                setFetchData(data);
            }); 
    };

    return (
        <Container>
            <Row className="searchbar">
                <Col lg={9}>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="search-field">
                            <img className="search-icons" src={Pin} alt=""/>
                            <input className="search-inputs" type="text" placeholder="Enter destination" ref={ref} />
                        </div>
                    </form>
                </Col>
                <Col lg={3}>
                    <button className="search-button" onClick={(e) => handleSubmit(e)}>
                        <img src={Magnifying} />
                    </button>
                </Col>
            </Row>

            <div>
            {fetchData.map((property:any) => (
                  <Row key={property.id} className="card">
                    <Col lg={6}>
                        <img src={`/images/${property.imgName}`} className="card-image"></img>
                      {/* <img src={`/images/${property.imgName}`} className="card-image"></img> */}
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
                )}
            </div>

            <div>
            {loading ? (
              "loading"
             ) : (
                data.map((property:any) => (
                    <Row>
                        <Col lg={12}>
                        <Cards property={property} key={property.id} />
                        </Col>
                    </Row>
                ))
            )}
            </div>
            
        </Container >
        
    )
};









// import { useRef, useState } from "react";
// import { Container } from "react-bootstrap";
// import Pin from "/icons/pin.svg";
// import axios from "axios";
// import { Col, Row } from "react-bootstrap";

// export function Search (){
//     const [fetchData, setFetchData] = useState([]);
//     const ref = useRef<HTMLInputElement>(null)

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         // console.log(ref.current.value);

//         axios.get(`http://localhost:5000/api/get/search/${ref.current.value}`)
//             .then(({data}) => {
//                 // console.log(data)
//                 setFetchData(data);
//             }); 
//     };

//     return (
//         <Container>
//             <form onSubmit={(e) => handleSubmit(e)}>
//                 <div className="search-field">
//                     <img className="search-icons" src={Pin} alt=""/>
//                     <input className="search-inputs" type="text" placeholder="Enter destination" ref={ref} />
//                 </div>
//             </form>
//             <div>
//             {fetchData.map((property:any) => (
//                   <Row key={property.id} className="card">
//                     <Col lg={3}>
//                       <a href="/signin">
//                         <img src={`/images/${property.imgName}`} className="card-image"></img>
//                       </a>
//                       {/* <img src={`/images/${property.imgName}`} className="card-image"></img> */}
//                     </Col>
//                     <Col lg={3}>
//                       <h5>{property.name}</h5>
//                       <div className="price fs-5">{property.price} SEK/night</div>
//                       <div className="conditions"></div>
//                       <div className="tag">{property.type}</div>
//                     </Col>
//                   </Row>
//                 )
//                 )}
//             </div>
            
//         </Container >
        
//     )
// };