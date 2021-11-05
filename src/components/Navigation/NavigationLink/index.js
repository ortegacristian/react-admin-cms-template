// React
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Acciones de redux
import { collapseNavigationSubLinks } from '../../../actions/navigation';

export const NavigationLink = ({ navigationLink }) => {
  const dispatch = useDispatch();

  const [className, setClassName] = useState(navigationLink.className);

  function onMouseOver() {
    setClassName('hovered');
  }

  function onMouseLeave() {
    setClassName('');
  }

  function handleSubLinksClick() {
    dispatch(collapseNavigationSubLinks(navigationLink.id));
  }

  // Obtenemos el estado del reducer Navigation
  const navigationState = useSelector((state) => state.navigation);

  // Miramos si tiene que mostrar o ocultar los subLinks
  const { subLinksActive } = navigationState;

  function getGroupLinkActiveClass() {
    let linkActiveClass = '';

    // Buscamos el link
    const findLink = subLinksActive.find((link) => link.id === navigationLink.id);

    // Si encuentra el link
    if (findLink && findLink.active) {
      linkActiveClass = 'active';
    }

    return linkActiveClass;
  }

  function renderLinkIcon(navigationLink) {
    const groupLinkActiveClass = getGroupLinkActiveClass();
    if (groupLinkActiveClass === 'active') {
      return (
        <ion-icon name="chevron-down-outline" />
      );
    }
    return (
      <ion-icon name={navigationLink.icon} />
    );
  }

  function renderLink() {
    const groupLinkActiveClass = getGroupLinkActiveClass();
    if (navigationLink.subNavigationLinks) {
      return (
        <>
          <div className={`groupLink ${groupLinkActiveClass}`} onClick={handleSubLinksClick} onKeyUp={handleSubLinksClick} role="button" tabIndex={navigationLink.id}>
            <span className="icon">{renderLinkIcon(navigationLink, navigationLink.id)}</span>
            <span className="title">{navigationLink.title}</span>
          </div>
          <div className="subLinks">
            {
              navigationLink.subNavigationLinks.map((subNavigationLink) => <NavigationLink key={subNavigationLink.id} navigationLink={subNavigationLink} />)
            }
          </div>
        </>
      );
    }
    return (
      <Link to={navigationLink.url}>
        <span className="icon">{renderLinkIcon(navigationLink)}</span>
        <span className="title">{navigationLink.title}</span>
      </Link>
    );
  }

  return (
    <li
      className={className}
      onMouseOver={onMouseOver}
      onFocus={() => {}}
      onMouseLeave={onMouseLeave}
    >
      {renderLink()}
    </li>
  );
};

NavigationLink.propTypes = {
  navigationLink: PropTypes.shape({
    id: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
    url: PropTypes.string,
    subNavigationLinks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        icon: PropTypes.string,
        title: PropTypes.string,
        url: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default NavigationLink;
