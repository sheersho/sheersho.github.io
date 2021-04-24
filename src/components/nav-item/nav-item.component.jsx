import React from 'react';
import { Button } from '@chakra-ui/button';
import { Link, withRouter } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';

const NavItem = ({ itemName, routeUrl, location }) => {
  return itemName !== 'Resume' ? (
    <Link to={routeUrl}>
      <Button
        marginLeft={3}
        variant={location.pathname === routeUrl ? 'outline' : 'solid'}
      >
        {itemName}
      </Button>
    </Link>
  ) : (
    <Button
      as="a"
      marginLeft={3}
      href={routeUrl}
      target="_blank"
      rel="noreferrer"
      rightIcon={<FaExternalLinkAlt />}
    >
      {itemName}
    </Button>
  );
};

export default withRouter(NavItem);
