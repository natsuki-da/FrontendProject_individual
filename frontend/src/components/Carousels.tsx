import { Carousel, CarouselItem } from "react-bootstrap"
import House1 from "/images/1.png"
import House2 from "/images/2.png"
import House3 from "/images/3.png"

export function Carousels(){
    return (
        <Carousel>
            <CarouselItem>
                <img
                className="carousels"
                src={House1} />
            </CarouselItem>
            <CarouselItem>
                <img
                className="carousels"
                src={House2} />
            </CarouselItem>
            <CarouselItem>
                <img
                className="carousels"
                src={House3} />
            </CarouselItem>
        </Carousel>
    )
}