import store from '../store'
import React from 'react'
import './participants.css'

export default function Participants(props){
   return  (props.inSession && props.onStage) ? 
    <div className='on-stage-in-session'>
        <div className='item'>
            <img src={props.avatar} width='50'/>
            <p>{props.name}</p>
            <p>On Stage</p>
        </div>
    </div>
    : (props.inSession && !props.onStage) ?
    <div className='on-stage'>
        <div className='item'>
            <img src={props.avatar} width='50'/>
            <p>{props.name}</p>
            <p>In Session</p>
        </div>
    </div>
    : 
    <div className='left-session'>
    <div className='item'>
        <img src={props.avatar} width='50'/>
        <p>{props.name}</p>
        <p>Left Session</p>
    </div>
</div>
}

