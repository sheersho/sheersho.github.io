import React from 'react';
import axios from 'axios';
import { Image } from '@chakra-ui/image';
import { Box, Grid } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';

class BlogsPage extends React.Component {
  state = {
    blogs: [],
  };

  componentDidMount() {
    try {
      axios
        .get(
          'https://fullyunderstood.com/wp-json/wp/v2/posts?author=2&per_page=100&_embed'
        )
        .then((result) => {
          if (result.status === 200 && result.data) {
            this.setState({ blogs: result.data });
          }
        });
    } catch (error) {}
  }

  render() {
    const { blogs } = this.state;

    return (
      <Grid mt={10} p={4} templateColumns="repeat(3, 1fr)" gap={3}>
        {blogs.length ? (
          blogs.map(({ id, date, title: { rendered }, link, _embedded }) => (
            <Box
              key={id}
              as="a"
              m={2}
              href={link}
              target="_blank"
              rel="noreferrer"
              position="relative"
              _hover={{
                transform: 'translateY(-2px)',
                transition: 'all .2s',
              }}
            >
              <Image
                src={_embedded['wp:featuredmedia'][0].link}
                alt={rendered}
                borderRadius="base"
              />
              {/* <Box>
                  <Text>{rendered}</Text>
                  <Text>{new Date(date).toLocaleDateString('in')}</Text>
                </Box> */}
            </Box>
          ))
        ) : (
          <Spinner />
        )}
      </Grid>
    );
  }
}

export default BlogsPage;
