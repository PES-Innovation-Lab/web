// CardCarousel.js
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const CardCarousel = ({ cardData }) => {
    return (
        <Carousel showArrows={true} autoPlay={true} interval={5000} infiniteLoop={true}>
            {cardData.map((card, index) => (
                <div key={index}>
                    <img src={card.poster_url} alt={`Card ${index + 1}`} />
                    <div className="card-details">
                        <h2>{card.title}</h2>
                        <p className="short-description">{card.short_description}</p>
                        <p className="mentors"><strong>Mentors: </strong>{card.mentors}</p>
                        <p className="interns"><strong>Interns: </strong>{card.interns}</p>
                    </div>
                </div>
            ))}
        </Carousel>
    );
}

export default CardCarousel;
