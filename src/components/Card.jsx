import React from 'react';
import '../styles/Card.css';
import * as images from '../assets/index';

const Card = (props) => {
    let badgeText;
    (props.openSpots === 0) ? badgeText = 'SOLD OUT' : badgeText = 'ONLINE';
    console.log(props); 
    return (
        <div className='card'>
            <div className='card--badge'>{badgeText}</div>
            <img src={props.coverImg} className='card--image' alt=""/>
            <div className='card--stats'>
                <img src={images.Star} className='card--star' alt=""/>
                <span className='card--gray'>{props.state.rating}</span>
                <span className='card--gray'>({props.state.reviewCount}) ~</span>
                <span className='card--gray'>{props.country}</span>
            </div>
            <p className='card--title'>{props.title}</p>
            <p className='card--price'><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    );
}

export default Card;