import React from 'react';
import { GridItem, Heading, Text } from '@chakra-ui/layout';

const ProjectInfo = ({ name, description }) => {
  return (
    <GridItem alignSelf="start">
      <Heading
        fontSize={{ base: '16px', md: '18px', lg: '20px' }}
        paddingBottom={2}
      >
        {name}
      </Heading>
      <Text fontSize={{ base: '12px', md: '14px', lg: '15px' }}>
        {description}
      </Text>
    </GridItem>
  );
};

export default ProjectInfo;
