import React, { useContext } from 'react'
import { HousesContext } from '../context/HousesContext'
import Card from './Card'
import './GridContainer.css'


export default function GridContainer(props){
    const {properties} = useContext(HousesContext);
    return(
        <div className="grid-container">
            {properties.map((house, index) => <Card key={index} value={house}/>)}
        </div>
    )
}