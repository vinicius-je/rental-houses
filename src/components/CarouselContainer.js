import React from 'react' 
import './CarouselContainer.css' 
import { Carousel } from 'react-responsive-carousel'
import { carouselHouses } from '../houses'
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function CarouselContainer(){
    return(
        <Carousel showArrows={true} className="carousel-container" emulateTouch={true} showThumbs={false} infiniteLoop={true} showStatus={false} autoPlay={true} interval={3000} transitionTime={800}>
            {carouselHouses.map((element, index) => 
                <div className="carousel-element-wrapper">
                    <img src={element.img} alt={index}></img>
                </div>
            )}
        </Carousel>
    )
}

