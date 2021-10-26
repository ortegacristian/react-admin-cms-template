// React
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const NavigationLink = ({ navigationLink }) => {
  const [className, setClassName] = useState('');

  function onMouseOver() {
    setClassName('hovered');
  }

  function onMouseLeave() {
    setClassName('');
  }

  return (
    <li
      className={className}
      onMouseOver={onMouseOver}
      onFocus={() => {}}
      onMouseLeave={onMouseLeave}
    >
      <Link to="/">
        <span className="icon"><ion-icon name={navigationLink.icon} /></span>
        <span className="title">{navigationLink.title}</span>
      </Link>
    </li>
  );
};

NavigationLink.propTypes = {
  navigationLink: PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default NavigationLink;
