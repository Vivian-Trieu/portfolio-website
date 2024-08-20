import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import background from "../assets/noisy-gradients-bg.png";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "UI/UX designer + front-end developer";

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
  <VStack spacing={16}>
    <VStack spacing={4} alignItems="center">
      <Avatar size="2xl" src="https://i.pravatar.cc/150?img=7"/>
      <Heading as="h4" size="md" noOfLines={1}>{greeting}</Heading>
    </VStack>
    <VStack spacing={6}>
      <Heading as="h1" size="3xl" noOfLines={1}>{bio1}</Heading>
      <Heading as="i" size="md" noOfLines={1}>{bio2}</Heading>
    </VStack>
  </VStack>
  </FullScreenSection>
);

export default LandingSection;
