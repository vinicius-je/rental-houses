import { motion } from 'framer-motion'
import React from 'react' 
import './CarouselElement.css'

export default function CarouselElement(props, key){
    const {img} = props.value
    return(
        <motion.div className="carousel-element">
            <img src={img} alt={key}></img>
        </motion.div>
    )
}
