import React from 'react';
import "./Card.css";
import myimg from  "./assets/Vector 1 (2).png"
const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
      <img src={myimg} alt="" />
      <span>Holiday Inn</span>
        <div className="card-header">
          <h6>1.5 miles away from joblocation. </h6>
          <div className="card-content">
          <div className="para">
          <p>Singles: $120. </p>
          <p>Doubles: $145</p>
          </div>
          <button className="green-button">Book Now</button>
          </div>
        </div>
      </div>
      <div className="card">
      <img src={myimg} alt="Card 1" />
      <span>Holiday Inn</span>

      <div className="card-header">
          <h6>1.5 miles away from joblocation. </h6>
          <div className="card-content">
          <div className="para">
          <p>Singles: $120. </p>
          <p>Doubles: $145</p>
          </div>
          <button className="green-button">Book Now</button>
          </div>
        </div>
      </div>
      <div className="card">
      <img src={myimg} alt="Card 1" />
      <span>Holiday Inn</span>

      <div className="card-header">
          <h6>1.5 miles away from joblocation. </h6>
          <div className="card-content">
            <div className="para">
          <p>Singles: $120. </p>
          <p>Doubles: $145</p>
          </div>
          <button className="green-button">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
