import React from "react";
import { Box, Heading, VStack, HStack, Text, Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import background from "../assets/noisy-gradients-bg.png";
import portrait from "../assets/portrait.svg";
import sparkle from "../assets/sparkle.svg";

const greeting = "Hi, I'm Vivian!";
const title = "UI/UX designer + front-end developer";
const bio = "I have a passion for visual design that is both aesthetically pleasing and functional. This has inspired me to build a skill set that can nurture my design skills with technical front-end development.";


// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#FFABC9"
    backgroundImage={background}
    backgroundSize="cover"
    backgroundRepeat="no-repeat"
    backgroundPosition="center"
  >
    <Box position="relative">
      <Image src={sparkle} position="absolute" left="-90px" bottom="70px" transform="scaleY(-1)" boxSize="80px"/>
      <Image src={sparkle} position="absolute" right="560px" top="70px" transform="scaleX(-1)" boxSize="80px"/>
      <Image src={sparkle} position="absolute" right="80px" bottom="10px" transform="scaleY(-1) scaleX(-1)" boxSize="80px"/>

      <HStack spacing={15} padding={10}>
        <VStack spacing={6} alignItems="flex-start">
          <Text as="i" fontSize="xl" >{title}</Text>
          <Heading as="h1" size="3xl" >{greeting}</Heading>
          <Text fontSize="2xl">{bio}</Text>
        </VStack>
        <Image
          size="xl"
          src={portrait}
        />
      </HStack>
    </Box>

  </FullScreenSection>
);

export default LandingSection;
