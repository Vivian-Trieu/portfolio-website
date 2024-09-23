import { Tag, Box, Button, Heading, HStack, Image, Text, VStack, Wrap } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ category, startDate, endDate, title, description, skills, codeLink, figmaLink, webLink, imageSrc }) => {

  return (
    <Box
      maxW="sm"
      borderRadius='xl'
      bg="white"
    // cursor="pointer"
    >
      <Image
        objectFit="cover"
        height="300px"
        borderRadius="xl"
        src={imageSrc}
      />
      <VStack
        display="flex"
        alignItems="start"
        py={6}
        spacing={4}
        color="black"
      >
        <HStack justifyContent="space-between" width="100%">
          <Text
            as="b"
            fontSize="sm"
            color="#A6A6A6"
            casing="uppercase"
            letterSpacing="0.1em"
          >
            {category}
          </Text>
          <Text
            as="b"
            fontSize="sm"
            color="#A6A6A6"
            casing="uppercase"
            letterSpacing="0.1em"
          >
            {startDate} - {endDate}
          </Text>
        </HStack>
        <Heading
          as='h3'
          size="lg"
          color="#333"
        >
          {title}
        </Heading>
        <Text color="#7C7C7C" fontSize="md" align="left">
          {description}
        </Text>
        <Wrap spacing={2}>
          {skills.map((skill, index) => (
            <Tag key={index} bg="#ECECEC" color="#969696" borderRadius={20} px={3} py={2}>
              {skill}
            </Tag>
          ))}
        </Wrap>
        <HStack spacing={6} pt={5}>
          {codeLink && (
            <Button
              as="a"
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              color="#FFABC9"
              variant="link"
              leftIcon={<FontAwesomeIcon icon={faCode} size="sm" />}
              _hover={{
                textDecoration: "underline",
                textUnderlineOffset: "0.3em",
                textDecorationThickness: "3px",
                //color: "#C3A7E8"
              }}
            >
              Code
            </Button>
          )}
          {figmaLink && (
            <Button
              as="a"
              href={figmaLink}
              target="_blank"
              rel="noopener noreferrer"
              color="#FFABC9"
              variant="link"
              leftIcon={<FontAwesomeIcon icon={faFigma} size="sm" />}
              _hover={{
                textDecoration: "underline",
                textUnderlineOffset: "0.3em",
                textDecorationThickness: "3px",
                //color: "#C3A7E8"
              }}
            >
              Figma
            </Button>
          )}
          {webLink && (
            <Button
              as="a"
              href={webLink}
              target="_blank"
              rel="noopener noreferrer"
              color="#FFABC9"
              variant="link"
              leftIcon={<FontAwesomeIcon icon={faLink} size="sm" />}
              _hover={{
                textDecoration: "underline",
                textUnderlineOffset: "0.3em",
                textDecorationThickness: "3px",
                //color: "#C3A7E8"
              }}
            >
              Link
            </Button>
          )}
        </HStack>
      </VStack>
    </Box>
  );

};

export default Card;
