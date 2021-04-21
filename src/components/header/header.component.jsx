import React from 'react';
import { Avatar, Flex, Heading, Spacer } from '@chakra-ui/react';

import strawHatPic from '../../assets/straw_hat.png';
import NavItem from '../nav-item/nav-item.component';
import { Link } from 'react-router-dom';

const navItems = [
  { page: 'Blogs', routeUrl: '/blogs' },
  { page: 'Projects', routeUrl: '/projects' },
  { page: 'Resume', routeUrl: '/resume' },
];

const Header = () => {
  return (
    <Flex>
      <Link to="/">
        <Flex align="center">
          <Avatar m="2" src={strawHatPic} bg="white" name="Shubham Tarade" />
          <Heading size="md">Shubham Tarade</Heading>
        </Flex>
      </Link>
      <Spacer />
      <Flex align="center">
        {navItems.map((navItem) => (
          <NavItem
            key={navItem.page}
            itemName={navItem.page}
            routeUrl={navItem.routeUrl}
          ></NavItem>
        ))}
      </Flex>
    </Flex>
  );
};

export default Header;
