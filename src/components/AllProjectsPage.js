import React from "react";
import { Box, Heading, VStack, HStack, Text, Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import background from "../assets/noisy-gradients-bg.png";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const AllProjectsPage = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    //backgroundColor="#FFABC9"
    backgroundImage={background}
    backgroundSize="cover"
    backgroundRepeat="no-repeat"
    backgroundPosition="center"
  >

  </FullScreenSection>
);

export default AllProjectsPage;