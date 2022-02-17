import React from 'react' 
import './Card.css'

export default function Card({value, index}){

    const {img, street, price, bedrooms, bathrooms, area} = value

    return(
        <div layout className="card-container">
            <img src={img} alt={index}></img>
            <div className="card-information">
                <p className="card-price">${price.toFixed(3)}</p>
                <p className="card-street">{street}</p>
                <div className="card-footer">
                <div className="card-footer-box">
                    <div className="card-footer-icon-box">
                        <i className="fas fa-bed"></i>
                        <p>{bedrooms}</p>
                    </div>
                    <small>Bedrooms</small>
                </div>
                <div className="card-footer-box">
                    <div className="card-footer-icon-box">
                        <i className="fas fa-bath"></i>
                        <p>{bathrooms}</p>
                    </div>
                    <small>Bathrooms</small>
                </div>
                <div className="card-footer-box">
                    <div className="card-footer-icon-box">
                        <i className="fas fa-home"></i>
                        <p>{area}m<sup>2</sup></p>
                    </div>
                    <small>Area</small>
                </div>
            </div>
            </div>
        </div>
    )
}