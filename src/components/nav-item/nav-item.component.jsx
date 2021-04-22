import React from 'react';
import { Button } from '@chakra-ui/button';
import { Link } from 'react-router-dom';

const NavItem = ({ itemName, routeUrl }) => {
  return (
    <Link to={routeUrl}>
      <Button
        ml={4}
        colorScheme="twitter"
        _focus={{
          color: '#1da1f2',
          backgroundColor: 'white',
          border: '1px solid #1da1f2',
        }}
        _hover={{
          color: '#1da1f2',
          backgroundColor: 'white',
          border: '1px solid #1da1f2',
        }}
      >
        {itemName}
      </Button>
    </Link>
  );
};

export default NavItem;
