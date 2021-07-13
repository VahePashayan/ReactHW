import './card.css'
import React from 'react';

export default function Card(props) {
    return <div className="card">
        <h2>{props.day.weekDay}</h2>
        <img src={props.day.imgURL} alt="" />
        <h3>{props.day.temp}</h3>
    </div>
}