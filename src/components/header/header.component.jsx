import React from 'react';
import { Avatar, Flex, Heading, Spacer } from '@chakra-ui/react';

import strawHatPic from '../../assets/straw_hat.png';
import NavItem from '../nav-item/nav-item.component';

const navItems = ['Blogs', 'Resume', 'Contact me'];

const Header = () => {
  return (
    <Flex>
      <Flex align="center">
        <Avatar m="2" src={strawHatPic} bg="white" name="Shubham Tarade" />
        <Heading size="md">Shubham Tarade</Heading>
      </Flex>
      <Spacer />
      <Flex align="center">
        {navItems.map((navItem) => (
          <NavItem key={navItem} itemName={navItem}></NavItem>
        ))}
      </Flex>
    </Flex>
  );
};

export default Header;
