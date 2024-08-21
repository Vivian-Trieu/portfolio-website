import React from "react";
import { Box, Heading, VStack, HStack, Text, Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import background from "../assets/noisy-gradients-bg.png";
import portrait from "../assets/portrait.svg";
import sparkle from "../assets/sparkle.svg";

const greeting = "Hi, I'm Vivian!";
const title = "UI/UX designer + front-end developer";
const bio = "Driven by a passion for design and a talent for creating elegant user experiences, I combine creativity with front-end coding expertise to bring visions to life.";


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
      <Image src={sparkle} position="absolute" left="-130px" bottom="70px" transform="scaleY(-1)" boxSize="80px"/>
      <Image src={sparkle} position="absolute" right="560px" top="70px" transform="scaleX(-1)" boxSize="80px"/>
      <Image src={sparkle} position="absolute" right="60px" bottom="-20px" transform="scaleY(-1)" boxSize="80px"/>

      <HStack spacing={20}>
        <VStack spacing={6} alignItems="flex-start">
          <Text as="i" fontSize="2xl" >{title}</Text>
          <Heading as="h1" size="4xl" >{greeting}</Heading>
          <Text fontSize="3xl">{bio}</Text>
        </VStack>
        <Image
          size="3xl"
          src={portrait}
        />
      </HStack>
    </Box>

  </FullScreenSection>
);

export default LandingSection;
