import React from 'react';
import '../css/property-card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed, faBath, faPoundSign, faEnvelope 
} from '@fortawesome/free-solid-svg-icons';

const PropertyCard = props => (
  <div>
    <div className="property-card">
      <div className="title">
        <span>{props.title}</span>
      </div>
      <div className="type">
        <span>{props.type} - {props.city}</span>
      </div>
      <div className="bathrooms">
        <FontAwesomeIcon icon={faBath} />
        <span> {props.bathrooms}</span>
      </div>
      <div className="bedrooms">
        <FontAwesomeIcon icon={faBed} />
        <span> {props.bedrooms}</span>
      </div>
      <div className="price">
        <FontAwesomeIcon icon={faPoundSign} />
        <span> {props.price}</span>
      </div>
      <div className="email">
        <FontAwesomeIcon icon={faEnvelope} />
        <a href="mailto:someone@example.com?Subject=Hello%20again" target="_top"> E-mail us</a>
      </div>
    </div>
  </div>
);

export default PropertyCard;
