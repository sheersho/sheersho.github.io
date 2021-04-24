import React from 'react';
import { Avatar, Flex, Heading } from '@chakra-ui/react';

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
    <Flex
      justifyContent={{ base: 'center', md: 'space-between' }}
      flexWrap="wrap"
    >
      <Flex>
        <Link to="/">
          <Flex
            align="center"
            border="1px solid"
            borderColor="twitter.500"
            paddingRight="8px"
            borderRadius="10px"
            marginBottom={{ base: '12px', md: '0' }}
          >
            <Avatar src={strawHatPic} bg="white" name="Shubham Tarade" />
            <Heading size="md" color={'twitter.500'}>
              Shubham Tarade
            </Heading>
          </Flex>
        </Link>
      </Flex>
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
