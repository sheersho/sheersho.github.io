import React from 'react';
import axios from 'axios';
import { Box, Heading, Text, Grid } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';

class ProjectsPage extends React.Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    try {
      const repositoryRequestUrl =
        'https://api.github.com/users/coder-shanks/repos?sort=updated&direction=desc';
      const repositoryRequestConfig = {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      };

      axios
        .get(repositoryRequestUrl, repositoryRequestConfig)
        .then((repositoryResult) => {
          if (repositoryResult.status === 200 && repositoryResult.data) {
            this.setState({ projects: repositoryResult.data });
          }
        });
    } catch (error) {}
  }

  render() {
    const { projects } = this.state;

    return (
      <Grid mt={10} p={4} templateColumns="repeat(3, 1fr)" gap={3}>
        {projects.length ? (
          projects.map(
            ({
              id,
              name,
              description,
              html_url,
              homepage,
              language,
              stargazers_count,
              forks_count,
            }) => (
              <Box
                key={id}
                margin={2}
                padding={4}
                cursor="pointer"
                color="white"
                height={{ base: '150px', md: '180px' }}
                borderRadius="base"
                justifyContent="space-between"
                bgGradient="linear-gradient(90deg, rgba(29,161,242,1) 30%, rgba(20,203,136,1) 86%)"
                _hover={{
                  transform: 'translateY(-2px)',
                  transition: 'all .2s',
                }}
              >
                <Heading
                  fontSize={{ base: '16px', md: '20px' }}
                  paddingBottom={2}
                >
                  {name}
                </Heading>
                <Text fontSize={{ base: '12px', md: '16px' }}>
                  {description}
                </Text>
              </Box>
            )
          )
        ) : (
          <Spinner />
        )}
      </Grid>
    );
  }
}

export default ProjectsPage;
