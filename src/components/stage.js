import store from '../store'
import React from 'react'


export default function stage (props){
    return (
        <div className='item'>
            <div>
                <header><h2>{props.name}</h2></header>
            </div>
            <div>
                <img src ={props.avatar} width ='300' alt='avatar'/>
            </div>
        </div>
    )
}


