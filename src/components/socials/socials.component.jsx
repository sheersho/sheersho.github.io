import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

import gitHubSvg from '../../assets/iconmonstr-github-3.svg';
import linkedinSvg from '../../assets/iconmonstr-linkedin-3.svg';
import twitterSvg from '../../assets/iconmonstr-twitter-3.svg';
import mediumSvg from '../../assets/iconmonstr-medium-3.svg';
import SociaLink from '../social-link/social-link.component';

const socialsInfo = [
  {
    name: 'github',
    socialUrl: 'https://github.com/coder-shanks',
    svgIcon: gitHubSvg,
  },
  {
    name: 'linkedin',
    socialUrl: 'https://www.linkedin.com/in/shubham-tarade/',
    svgIcon: linkedinSvg,
  },
  {
    name: 'twitter',
    socialUrl: 'https://twitter.com/tarade_shubham',
    svgIcon: twitterSvg,
  },
  {
    name: 'medium',
    socialUrl: 'https://medium.com/@sgstarade',
    svgIcon: mediumSvg,
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
            socialUrl={socialInfo.socialUrl}
            svgIcon={socialInfo.svgIcon}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Socials;
