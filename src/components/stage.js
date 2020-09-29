import store from '../store'
import React from 'react'


function stage (props){
    if(props.onStage === true) {
    return (
        <div className='item'>
            <div>
                <header>{props.participants.name}</header>
            </div>
            <div>
                <img src ={props.participants.avatar} width ='50' alt='avatar'/>
            </div>
        </div>
    )}
}


export default stage