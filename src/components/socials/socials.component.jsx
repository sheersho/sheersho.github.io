import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

import SociaLink from '../social-link/social-link.component';

import {
  FaLinkedin,
  FaMedium,
  FaTwitterSquare,
  FaGithubSquare,
} from 'react-icons/fa';

const socialsInfo = [
  {
    name: 'github',
    socialUrl: 'https://github.com/coder-shanks',
    svgIcon: FaGithubSquare,
    color: 'black',
  },
  {
    name: 'linkedin',
    socialUrl: 'https://www.linkedin.com/in/shubham-tarade/',
    svgIcon: FaLinkedin,
    color: 'linkedin',
  },
  {
    name: 'twitter',
    socialUrl: 'https://twitter.com/tarade_shubham',
    svgIcon: FaTwitterSquare,
    color: 'twitter',
  },
  {
    name: 'medium',
    socialUrl: 'https://medium.com/@sgstarade',
    svgIcon: FaMedium,
    color: 'green',
  },
];

const Socials = () => {
  return (
    <Box p={4}>
      <Text fontSize="lg" fontWeight="bold">
        You can find me on:
      </Text>

      <br />
      <Flex maxW="240px" justify="space-between">
        {socialsInfo.map((socialInfo) => (
          <SociaLink
            key={socialInfo.name}
            color={socialInfo.color}
            socialUrl={socialInfo.socialUrl}
            svgIcon={socialInfo.svgIcon}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Socials;
