import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

import SociaLink from '../social-link/social-link.component';

import {
  FaLinkedin,
  FaMedium,
  FaTwitterSquare,
  FaGithubSquare,
  FaYoutubeSquare,
  FaInstagramSquare
} from 'react-icons/fa';

const socialsInfo = [
  {
    name: 'github',
    socialUrl: 'https://sh-ort.app/-0xmo',
    svgIcon: FaGithubSquare,
    color: 'black',
  },
  {
    name: 'linkedin',
    socialUrl: 'https://sh-ort.app/xm4mc',
    svgIcon: FaLinkedin,
    color: 'telegram.500',
  },
  {
    name: 'instagram',
    socialUrl: 'https://sh-ort.app/te8fv',
    svgIcon: FaInstagramSquare,
    color: 'red.400',
  },
  {
    name: 'twitter',
    socialUrl: 'https://twitter.com/sheersho',
    svgIcon: FaTwitterSquare,
    color: 'twitter.500',
  }
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
