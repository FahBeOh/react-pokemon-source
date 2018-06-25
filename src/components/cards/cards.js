import React from 'react';
import './cards.css';

const Cards = props => (
<div className="col-3 text-center py-2">
    <img 
    src={props.src} 
    id={props.id} 
    className="img-thumbnail border-dark rounded"
    onClick={() => props.handleClick(props.id)}
    />
</div>
);

export default Cards;