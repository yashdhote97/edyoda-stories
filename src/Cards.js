import React from 'react';
import "./Cards.css";
import Footer from './Footer';

const Cards = ({cardImage,title,author,date,desc}) => {
    return ( 
            <div className="card">
                <img className="cardImg" src={cardImage}>
                </img>
                <div className="desc">
                    <span className="cardTitle">
                        <h3>{title}</h3>
                    </span>
                    <span className="cardAuthor">
                        <p className="author">{author}</p>&nbsp;|&nbsp;<p className="cardDate">{date}</p>
                    </span>
                    <div className="cardDesc">
                    {desc}
                    </div>
                </div>
            </div>
     );
}
 
export default Cards;