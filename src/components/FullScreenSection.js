import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      backgroundImage={boxProps.backgroundImage}   // Apply background image
      backgroundSize={boxProps.backgroundSize}     // Ensure the image covers the section
      backgroundRepeat={boxProps.backgroundRepeat} // Prevent repeating
      backgroundPosition={boxProps.backgroundPosition}
      color={isDarkBackground ? "white" : "black"}

      {...boxProps}
    >
      <VStack maxWidth="1280px" minHeight="100vh" justify="center">
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
