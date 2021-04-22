import React from 'react';
import { Tag } from '@chakra-ui/react';

const SkillTag = ({ tag, colorScheme }) => {
  return (
    <Tag
      borderRadius="full"
      height="36px"
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
