import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

import SociaLink from '../social-link/social-link.component';

import {
  FaLinkedin,
  FaMedium,
  FaTwitter,
  FaGithubSquare,
  FaYoutubeSquare,
  FaInstagram
} from 'react-icons/fa';

const socialsInfo = [
  {
    name: 'instagram',
    socialUrl: 'https://www.instagram.com/sheershopramanik/',
    svgIcon: FaInstagram,
    color: '#F44747',
  },
  {
    name: 'twitter',
    socialUrl: 'https://twitter.com/sheersho',
    svgIcon: FaTwitter,
    color: 'twitter.500',
  },
  
  
  {
    name: 'github',
    socialUrl: 'https://github.com/sheersho',
    svgIcon: FaGithubSquare,
    color: 'shopify.800',
  },
  {
    name: 'linkedin',
    socialUrl: 'https://www.linkedin.com/in/sheersho/',
    svgIcon: FaLinkedin,
    color: 'telegram.500',
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
