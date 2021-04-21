import React from 'react';
import { Tag } from '@chakra-ui/react';

const SkillTag = ({ tag, colorScheme }) => {
  return (
    <Tag
      size="lg"
      borderRadius="full"
      h="10"
      justifyContent="center"
      colorScheme={colorScheme}
      variant="outline"
    >
      {tag}
    </Tag>
  );
};

export default SkillTag;
