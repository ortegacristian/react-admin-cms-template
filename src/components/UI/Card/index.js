import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({ numbers, cardName, iconName }) => (
  <div className="card">
    <div>
      <div className="numbers">{numbers}</div>
      <div className="cardName">{cardName}</div>
    </div>
    <div className="iconBox">
      <ion-icon name={iconName} />
    </div>
  </div>
);

Card.propTypes = {
  numbers: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};

export default Card;
