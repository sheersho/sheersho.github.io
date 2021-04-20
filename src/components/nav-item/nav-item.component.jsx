import React from 'react';
import { Button } from '@chakra-ui/button';

const NavItem = ({ itemName }) => {
  return (
    <Button mr={4} colorScheme="twitter">
      {itemName}
    </Button>
  );
};

export default NavItem;
