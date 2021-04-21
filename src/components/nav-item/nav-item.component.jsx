import React from 'react';
import { Button } from '@chakra-ui/button';
import { Link } from 'react-router-dom';

const NavItem = ({ itemName, routeUrl }) => {
  return (
    <Link to={routeUrl}>
      <Button mr={4} colorScheme="twitter">
        {itemName}
      </Button>
    </Link>
  );
};

export default NavItem;
