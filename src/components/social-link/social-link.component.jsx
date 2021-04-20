import React from 'react';
import { Image } from '@chakra-ui/react';

const SociaLink = ({ socialUrl, svgIcon }) => {
  return (
    <a href={socialUrl} target="_blank" rel="noreferrer">
      <Image src={svgIcon} w="50px" h="50px" />
    </a>
  );
};

export default SociaLink;
