import React from 'react' 
import './Card.css'

export default function Card(props){
    return(
        <div className="card-container">
            <img src='https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'></img>
            <h3 className="card-title">teste</h3>
            <p className="card-description">There are many variations of passages of Lorem Ipsum available</p>
            <p className="card-price">$ 300.000</p>
        </div>
    )
}