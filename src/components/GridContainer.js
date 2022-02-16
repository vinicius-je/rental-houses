import React from 'react'
import { houses } from '../houses'
import Card from './Card'
import './GridContainer.css'


export default function GridContainer(props){
    console.log(houses)
    return(
        <div className="grid-container">
            {houses.map((house, index) => <Card key={index} value={house}/>)}
        </div>
    )
}