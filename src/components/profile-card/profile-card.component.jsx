import React, { useEffect, useState } from 'react';
import {
  Grid,
  GridItem,
  Image,
  Tag,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Typist from 'react-typist';

import profilePic from '../../assets/sheersho.jpg';
import Skills from '../../components/skills/skills.component';

const ProfileCard = () => {
  const [count, setCount] = useState(0);
  const typedTextBgColor = useColorModeValue('#363631', '#edf2f7');
  const typedTextColor = useColorModeValue('#edf2f7', '#000000');

  useEffect(() => {
    setCount(1);
  }, [count]);

  return (
    
    <Grid
      templateColumns={{ base: '1fr', md: '2fr 2fr', lg: '1fr 3fr' }}
      mt={10}
      p={4}
      gridColumnGap={10}
      textAlign={{ base: 'center', md: 'inherit' }}
    >
      <GridItem alignSelf="center">
        <Image src={profilePic} borderRadius="full" alt="Sheersho Pramanik" />
      </GridItem>
      <GridItem paddingTop="30px" alignSelf="center">
        <Text fontSize="2xl" fontWeight="bold">
          Hello !
        </Text>
        {count ? (
          <Typist
            cursor={{ show: false, hideWhenDone: true }}
            onTypingDone={() => setCount(0)}
          >
            <span
              style={{ fontSize: '24px', fontWeight: 'bold', color: '#1da1f2' }}
            >
              I am{' '}
              <span
                style={{
                  backgroundColor: `${typedTextBgColor}`,
                  padding: '4px',
                  borderRadius: '5px',
                  color: `${typedTextColor}`,
                }}
              >
                Sheersho
                <Typist.Backspace count={8} delay={3250} />
                a Backend Developer
                <Typist.Backspace count={19} delay={1250} />
                an Influencer
                <Typist.Backspace count={15} delay={1250} />
                a 
              </span>
            </span>
          </Typist>
        ) : (
          ''
        )}
        <br />
        <Text fontSize="lg">
          Passionate and creative Software Developer, from{' '}
          <Tag fontSize="lg" colorScheme="purple">Gurugram, India</Tag>.
        </Text>
        <br />
        <Text fontSize="lg">
          I am currently working as Associate  Technology L2 at{' '}
          <Tag fontSize="lg" colorScheme="red">Publicis Sapient</Tag>{' '}
           handling Full Cycle Development, APIs, Test Automation and DevOps stuff.
        </Text>
        <br />
        <Skills/>
        {/* <Text fontSize="lg">
          Apart from 9-5 job, I like to work on side projects and try to
          constantly learn something new to improve my skillset. At present, I
          am using React for my web projects and really enjoying it.
        </Text> */}
      </GridItem>
      
    </Grid>
    
  );
};

export default ProfileCard;
