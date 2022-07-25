import React from 'react';
import { Box, Grid, Text } from '@chakra-ui/react';
import SkillTag from '../skill-tag/skill-tag.component';

const tags = [
  { name: 'Java', colorScheme: 'red' },
  { name: 'Spring Boot', colorScheme: 'gray' },
  { name: 'React', colorScheme: 'purple' },
  { name: 'CSS3', colorScheme: 'pink' },
  { name: 'HTML5', colorScheme: 'yellow' },
  { name: 'CI/CD', colorScheme: 'teal' },
  { name: 'Git', colorScheme: 'gray' },
  { name: 'Azure', colorScheme: 'linkedin' },
];
const Skills = () => {
  return (
    <Box p={0}>
      <Text fontSize="lg" fontWeight="bold">
        Skills:
      </Text>
      <br />

      <Grid
        templateColumns={{
          base: 'repeat(2, 1fr)',
          sm: 'repeat(3, 1fr)',
          md: 'repeat(4, 1fr)',
          lg: 'repeat(6, 1fr)',
        }}
        gap={3}
      >
        {tags.map((tag) => (
          <SkillTag
            key={tag.name}
            tag={tag.name}
            colorScheme={tag.colorScheme}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
