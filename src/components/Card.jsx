import React from 'react';
import '../styles/Card.css';
import * as images from '../assets/index';

const Card = (props) => {
    return (
        <div className='card'>
            <img src={props.img} className='card--image' alt=""/>
            <div className='card--stats'>
                <img src={images.Star} className='card--star' alt=""/>
                <span className='card--gray'>{props.rating}</span>
                <span className='card--gray'>({props.reviewCount}) ~</span>
                <span className='card--gray'>{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    );
}

export default Card;