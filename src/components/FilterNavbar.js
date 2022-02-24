import React, { useContext } from 'react' 
import './FilterNavbar.css'
import { HousesContext } from '../context/HousesContext'
import { houses } from '../houses'

export default function FilterNavbar(){
    const {setProperties, btnActive, setBtnActive} = useContext(HousesContext);

    function filterProperties(e){
        if(Number(e.target.value) !== 0){
            setProperties(houses.filter(item => item.price === Number(e.target.value)));
        }else{
            setProperties(houses);
        }
        setBtnActive(Number(e.target.value));
    }

    return(
        <nav className="nav-container">
            <h3>Filter</h3>
            <div className="nav-btn-container">
                <button className={btnActive === 0 ? 'nav-btn active' : 'nav-btn'} value='0' onClick={(e) => filterProperties(e)}>All</button>
                <button className={btnActive === 125 ? 'nav-btn active' : 'nav-btn'} value='125' onClick={(e) => filterProperties(e)}>$125.000</button>
                <button className={btnActive === 200 ? 'nav-btn active' : 'nav-btn'} value='200' onClick={(e) => filterProperties(e)}>$200.000</button>
                <button className={btnActive === 250 ? 'nav-btn active' : 'nav-btn'} value='250' onClick={(e) => filterProperties(e)}>$250.000</button>
                <button className={btnActive === 300 ? 'nav-btn active' : 'nav-btn'} value='300' onClick={(e) => filterProperties(e)}>$300.000</button>
            </div>
        </nav>
    )
}