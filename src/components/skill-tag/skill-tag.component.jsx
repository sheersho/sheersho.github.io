import React from 'react';
import { Tag } from '@chakra-ui/react';

const SkillTag = ({ tag, colorScheme }) => {
  return (
    <Tag
      size="lg"
      borderRadius="full"
      h="10"
      cursor="pointer"
      justifyContent="center"
      colorScheme={colorScheme}
      _hover={{
        transform: 'translateY(-2px)',
        transition: 'all .2s',
      }}
    >
      {tag}
    </Tag>
  );
};

export default SkillTag;
