import React from 'react';
import { Grid, GridItem, Image, Text } from '@chakra-ui/react';

import profilePic from '../../assets/shubham_profile.jpg';

const ProfileCard = () => {
  return (
    <Grid
      templateColumns={{ base: '1fr', md: '1fr 3fr' }}
      mt={10}
      p={4}
      gridColumnGap={10}
      textAlign={{ base: 'center', md: 'inherit' }}
    >
      <GridItem>
        <Image src={profilePic} borderRadius="full" alt="Shubham Tarade" />
      </GridItem>
      <GridItem paddingTop="30px">
        <Text fontSize="2xl" fontWeight="bold">
          Hello !
        </Text>
        <Text fontSize="2xl" fontWeight="bold" color="twitter.500">
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
      </GridItem>
    </Grid>
  );
};

export default ProfileCard;
