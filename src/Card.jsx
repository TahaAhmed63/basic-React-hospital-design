import React from 'react';
import "./Card.css";
import myimg from  "./assets/Vector 1 (2).png"

const cardData = [
  {
    image: myimg,
    name: "Holiday Inn",
    distance: "1.5 miles away from joblocation.",
    singlesPrice: "$120",
    doublesPrice: "$145"
  },
  {
    image: myimg,
    name: "Holiday Inn",
    distance: "1.5 miles away from joblocation.",
    singlesPrice: "$120",
    doublesPrice: "$145"
  },
  {
    image: myimg,
    name: "Holiday Inn",
    distance: "1.5 miles away from joblocation.",
    singlesPrice: "$120",
    doublesPrice: "$145"
  }
];

const Card = () => {
  return (
    <div className="card-container">
      <button className="active-brown">Rare Find</button>
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.image} alt="" />

          <span>{card.name}</span>
          <div className="card-header">
            <h6>{card.distance}</h6>
            <div className="card-content">
              <div className="para">
                <p>Singles: {card.singlesPrice}</p>
                <p>Doubles: {card.doublesPrice}</p>
              </div>
              <button className="green-button">Book Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
