import store from '../store'
import React from 'react'
import './chat.css'

export default function chat(props) {
    let time = new Date(props.timestamp)
    let formatted = time.toLocaleTimeString([], {timeStyle: 'short'});
    return (props.type === 'message') ?
    <div className='message'>
        <p>{props.message}</p>
        <p>Time sent: {formatted.replace('AM','').replace('PM', '')}</p>
    </div>
    : (props.type === 'thumbs-up') ?
    <div className='message'>
        <p>Thumb up</p>
        <p>Time sent: {formatted}</p>
    </div>
    : (props.type === 'thumbs-down') ?
    <div className='message'>
        <p>Thumb down</p>
        <p>Time sent: {formatted}</p>
    </div>
    : (props.type === 'raise-hand') ?
    <div className='message'>
        <p>Raised Hand</p>
        <p>Time sent: {formatted}</p>
    </div>
    : (props.type === 'clap') ?
    <div className='message'>
        <p>Clapped</p>
        <p>Time sent: {formatted}</p>
    </div>
    : (props.type === 'join') ?
    <div className='message'>
        <p>Joined</p>
        <p>Time sent: {formatted}</p>
    </div>
    : (props.type === 'leave') ?
    <div className='message'>
        <p>Leave</p>
        <p>Time sent: {formatted}</p>
    </div>
    : (props.type === 'join-stage') ?
    <div className='message'>
        <p>Joined stage</p>
        <p>Time sent: {formatted}</p>
    </div>
    : (props.type === 'leave-stage') ?
    <div className='message'>
        <p>Left stage</p>
        <p>Time sent: {formatted}</p>
    </div>
    : undefined
}