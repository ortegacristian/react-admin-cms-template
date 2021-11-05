// React
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const NavigationLink = ({ navigationLink }) => {
  const [className, setClassName] = useState(navigationLink.className);

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
      {navigationLink.subNavigationLinks
          && navigationLink.subNavigationLinks.map((subNavigationLink) => <NavigationLink key={subNavigationLink.id} navigationLink={subNavigationLink} />)}
    </li>
  );
};

NavigationLink.propTypes = {
  navigationLink: PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
    subNavigationLinks: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default NavigationLink;
