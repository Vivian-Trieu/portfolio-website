import React from "react";
import { Box, Heading, VStack, HStack, Text, Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import background from "../assets/noisy-gradients-bg.png";
import portrait from "../assets/portrait.svg";
import sparkle from "../assets/sparkle.svg";

const greeting = "Hi, I'm Vivian!";
const title = "UI/UX designer + front-end developer";
const bio =
    "I have a passion for visual design that is both aesthetically pleasing and functional. This has inspired me to build a skill set that can nurture my design skills with technical front-end development.";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
    <FullScreenSection
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        //backgroundColor="#FFABC9"
        backgroundImage={background}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        overflow={"hidden"}
    >
        <Box position="relative">
            <Image
                src={sparkle}
                position="absolute"
                left="-80px"
                bottom="50px"
                transform="scaleY(-1)"
                boxSize="80px"
                display={{ base: "none", lg: "block" }}
            />
            <Image
                src={sparkle}
                position="absolute"
                right="560px"
                top="70px"
                transform="scaleX(-1)"
                boxSize="80px"
                display={{ base: "none", lg: "block" }}
            />
            <Image
                src={sparkle}
                position="absolute"
                right="-50px"
                bottom="-20px"
                transform="scaleY(-1) scaleX(-1)"
                boxSize="80px"
                display={{ base: "none", lg: "block" }}
            />

            <HStack
                spacing={{ base: "0", md: "15" }}
                padding={{ base: "6", md: "10" }}
                pb={{ base: "10", lg: "0" }}
                flexDirection={{ base: "column", lg: "row" }}
            >
                <VStack padding={5} spacing={6} alignItems="flex-start" pt={20}>
                    <Text as="i" fontSize={{ base: "md", md: "xl" }}>
                        {title}
                    </Text>
                    <Heading as="h1" size={{ base: "3xl", md: "3xl" }}>
                        {greeting}
                    </Heading>
                    <Text fontSize={{ base: "xl", md: "2xl" }}>{bio}</Text>
                </VStack>
                <Image
                    width={{ base: "md", md: "lg", "2xl": "xl" }}
                    src={portrait}
                />
            </HStack>
        </Box>
    </FullScreenSection>
);

export default LandingSection;
