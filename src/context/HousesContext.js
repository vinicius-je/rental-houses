import React, { createContext, useState } from 'react'
import { houses } from '../houses';

export const HousesContext = createContext();

export function HousesProvider(props){
    const [properties, setProperties] = useState(houses);
    const [btnActive, setBtnActive] = useState(0)

    return(
        <HousesContext.Provider value={{properties, setProperties, btnActive, setBtnActive}}>
            {props.children}
        </HousesContext.Provider>
    )
}