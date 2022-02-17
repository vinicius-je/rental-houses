import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react' 
import './Carousel.css' 
import { carouselHouses } from '../houses'
import CarouselElement from './CarouselElement'

export default function Carousel(){
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {   
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, [])

    return(
        <motion.div ref={carousel} className="carousel-container">
            <motion.div drag="x" dragConstraints={{right: 0, left: -width}} whileTap={{cursor: "grabbing"}} className="carousel-element-wrapper">
                {carouselHouses.map((element, index) => <CarouselElement key={index} value={element}/>)}
            </motion.div>
        </motion.div>
    )
}