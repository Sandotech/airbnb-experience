import React from 'react';
import '../styles/Card.css';
import Card1 from '../assets/image 12.png';
import Star from '../assets/Star 1.png';

const Card = () => {
    return (
        <div className='card'>
            <img src={Card1} className='card--image' alt=""/>
            <div className='card--stats'>
                <img src={Star} className='card--star' alt=""/>
                <span className='card--gray'>5.0</span>
                <span className='card--gray'>(6) ~</span>
                <span className='card--gray'>USA</span>
            </div>
            <p>Life Lessons with Kathie Zaferes</p>
            <p><span className='bold'>From $136</span> / person</p>
        </div>
    );
}

export default Card;