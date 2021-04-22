import React from 'react';
import { Box, Grid, Text } from '@chakra-ui/react';
import SkillTag from '../skill-tag/skill-tag.component';

const tags = [
  { name: 'ReactJS', colorScheme: 'blue' },
  { name: 'JavaScript', colorScheme: 'teal' },
  { name: 'TypeScript', colorScheme: 'cyan' },
  { name: 'HTML5', colorScheme: 'purple' },
  { name: 'CSS3', colorScheme: 'red' },
  { name: 'C# .NET', colorScheme: 'messenger' },
  { name: 'CI/CD', colorScheme: 'linkedin' },
  { name: 'Cypress', colorScheme: 'blue' },
  { name: 'Git', colorScheme: 'gray' },
  { name: 'NUnit', colorScheme: 'telegram' },
];

const Skills = () => {
  return (
    <Box p={4}>
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
