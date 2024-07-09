import { Box, Button, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box
      maxW="2xl"
      boxShadow="md"
      borderRadius='xl'
      bg="white"
      cursor="pointer"
    >
      <Image
        boxFit="cover"
        borderRadius="xl"
        src={imageSrc}
      />
      <VStack
        display="flex"
        alignItems="start"
        p={6}
        spacing={4}
        color="black"
      >
        <Heading
          as='h3'
          size="md"
        >
          {title}
        </Heading>
        <Text color="#64748b" fontSize="lg">
          {description}
        </Text>
        <Button
          colorScheme="black"
          variant="link"
          rightIcon={<FontAwesomeIcon icon={faArrowRight} size="sm" />}
        >
          See more
        </Button>

      </VStack>
    </Box>
  );

};

export default Card;
