import React from 'react'
import './MainContent.css'

export default function MainContent(props){
    return(
        <div className='main-content-container'>
            {props.children}
        </div>
    )
}
