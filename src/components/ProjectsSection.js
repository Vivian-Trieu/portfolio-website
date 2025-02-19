import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Button, Heading, HStack, Spacer } from "@chakra-ui/react";
import Card from "./Card";
import projects from "../ProjectData";
import { Link } from "react-router-dom";

const ProjectsSection = () => {

  const featuredProjects = projects.slice(0, 6);
  return (
    <FullScreenSection
      backgroundColor="white"
      isDarkBackground
      p={10}
      spacing={20}
    >
      <HStack justifyContent="space-between" width="100%" alignItems="center" mb={8}>
        <Heading
          as="h1"
          id="projects-section"
          color="#333"
        >
          featured projects
        </Heading>
        <Button as={Link} to="/all-projects" color="white" bg="#FFABC9" _hover={{ bg: "#a2a5df" }}>view all</Button>
      </HStack>
      <Box
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "repeat(2,minmax(0,1fr))", lg: "repeat(3,minmax(0,1fr))"}}
        gridGap={8}
      >
        {featuredProjects.map((project) => (
          <Card
            key={project.title}
            category={project.category}
            startDate={project.startDate}
            endDate={project.endDate}
            title={project.title}
            description={project.description}
            skills={project.skills}
            imageSrc={project.getImageSrc()}
            codeLink={project.codeLink}
            figmaLink={project.figmaLink}
            webLink={project.webLink}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
