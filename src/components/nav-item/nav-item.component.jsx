import React from 'react';
import { Button } from '@chakra-ui/button';
import { Link, withRouter } from 'react-router-dom';

const NavItem = ({ itemName, routeUrl, location }) => {
  return (
    <Link to={routeUrl}>
      <Button
        marginLeft={3}
        colorScheme="twitter"
        variant={location.pathname === routeUrl ? 'outline' : 'solid'}
      >
        {itemName}
      </Button>
    </Link>
  );
};

export default withRouter(NavItem);
