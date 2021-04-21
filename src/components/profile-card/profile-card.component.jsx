import React from 'react';
import { Box, Flex, Image, Spacer, Text } from '@chakra-ui/react';

import profilePic from '../../assets/shubham_profile.jpg';

const ProfileCard = () => {
  return (
    <Flex mt={10} p={4}>
      <Box>
        <Text fontSize="xl" fontWeight="bold">
          Hello !
        </Text>
        <Text fontSize="xl" fontWeight="bold" color="twitter.500">
          I am Shubham Tarade
        </Text>
        <br />
        <Text fontSize="lg">
          Passionate and creative front-end software engineer from India
        </Text>
        <br />
        <Text fontSize="lg">
          I'm currently a software engineer at Siemens Advanta.
        </Text>
        <br />
        <Text fontSize="lg">
          I consider myself a curious and inquisitive person, so on my spare
          time I like to work on side projects and try to constantly learn
          something new to improve my skillset.
        </Text>
      </Box>
      <Spacer />
      <Image
        src={profilePic}
        borderRadius="full"
        boxSize="250px"
        alt="Shubham Tarade"
      />
    </Flex>
  );
};

export default ProfileCard;
