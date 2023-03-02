import { NavLink } from "react-router-dom";
import React from "react";
import { cardData } from "../../Constants/Data";
import "./CardList.css";

function CardList({ image, name, price, text, carConfig, link }) {
  return (
    <div className="cardList-container">
      <div className="card-class">
        <img src={image} alt={image.alt} className="cardImg" />
        <div className="name_price">
          <h2>{name}</h2>
          <h2>{price}</h2>
        </div>
        <div className="card_text">
          <p>{text}</p>
        </div>
        <div className="carConfig">
          {carConfig.map(({ image, value }) => (
            <div className="logo_val">
              <img src={image} alt={value} /> <h2>{value}</h2>
            </div>
          ))}
        </div>
        <button className="rvBtn">
          <NavLink to={link} className="rvBtn-link">
            View RV
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default CardList;
