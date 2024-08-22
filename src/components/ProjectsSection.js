import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Button, Heading, HStack, Spacer } from "@chakra-ui/react";
import Card from "./Card";
import projects from "../ProjectData";

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="white"
      isDarkBackground
      p={10}
      //alignItems="flex-start"
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
        {/* <Button bg="#FFABC9" _hover={{ bg: "#C3A7E8" }}>view all</Button> */}
      </HStack>
      <Box
        display="grid"
        gridTemplateColumns="repeat(3,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
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
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
