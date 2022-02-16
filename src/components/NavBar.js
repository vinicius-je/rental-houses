import React from 'react' 
import './NavBar.css'

export default function NavBar(){
    return(
        <nav className="nav-container">
            <h3>Filter</h3>
            <div className="nav-btn-container">
                <button className="nav-btn active">$125.000</button>
                <button className="nav-btn">$200.000</button>
                <button className="nav-btn">$250.000</button>
                <button className="nav-btn">$300.000</button>
            </div>
        </nav>
    )
}