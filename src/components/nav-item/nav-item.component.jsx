import React from 'react';
import { Button } from '@chakra-ui/button';
import { Link, withRouter } from 'react-router-dom';
import { FaExternalLinkAlt,FaYoutube } from 'react-icons/fa';

const NavItem = ({ itemName, routeUrl, location }) => {
  return itemName == 'Resume' ?
  (
    <Button
      as="a"
      marginLeft={{ base: '6px', md: '12px' }}
      href={routeUrl}
      target="_blank"
      rel="noreferrer"
      colorScheme="telegram"
      rightIcon={<FaExternalLinkAlt />}
    >
      {itemName}
    </Button>
  ) 
   : itemName == "YouTube"?
  (
    <Button
      as="a"
      marginLeft={{ base: '6px', md: '12px' }}
      href={routeUrl}
      target="_blank"
      rel="noreferrer"
      colorScheme="red"
      rightIcon={<FaYoutube />}
    >
      {itemName}
    </Button>
  ):
  (
    <Link to={routeUrl}>
      <Button
        marginLeft={{ base: '6px', md: '12px' }}
        variant={location.pathname === routeUrl ? 'outline' : 'solid'}
      >
        {itemName}
      </Button>
    </Link>
  )
};

export default withRouter(NavItem);
