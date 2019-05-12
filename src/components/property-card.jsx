import React from 'react';
import '../css/property-card.css';

const PropertyCard = props => (
  <div className="property-card">
    <div className="title">
      <span>{props.title}</span>
    </div>
    <div className="type">
      <span>{props.type}</span>
    </div>
    <div className="bathrooms">
      <span>{props.bathrooms}</span>
    </div>
    <div className="bedrooms">
      <span>{props.bedrooms}</span>
    </div>
    <div className="price">
      <span>{props.price}</span>
    </div>
    <div className="city">
      <span>{props.city}</span>
    </div>
    <div className="email">
      <span>{props.email}</span>
    </div>
  </div>
);

export default PropertyCard;
