import React from 'react';
import { Grid } from '@chakra-ui/layout';

import ProjectInfo from '../project-info/project-info.component';
import ProjectMeta from '../project-meta/project-meta.component';

const ProjectContainer = ({ project }) => {
  const { name, description, ...otherProps } = project;
  return (
    <Grid
      margin={2}
      padding={4}
      cursor="pointer"
      color="white"
      height={{ base: '150px', md: '180px' }}
      borderRadius="base"
      bgGradient="linear-gradient(135deg, rgba(38,159,233,1) 30%, rgba(11,86,170,1) 87%)"
      _hover={{
        transform: 'translateY(-2px)',
        transition: 'all .2s',
      }}
    >
      <ProjectInfo name={name} description={description} />
      <ProjectMeta projectMeta={otherProps} />
    </Grid>
  );
};

export default ProjectContainer;
