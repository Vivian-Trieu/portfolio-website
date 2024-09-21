import React, { useState } from "react";
import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Image, color } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import projects from "../ProjectData";
import background from "../assets/noisy-gradients-bg.png";
import Card from "./Card";
import sparkle from "../assets/sparkle.svg";

const projectTypes = ["All", "Website", "Mobile App", "Web App"];

const AllProjectsPage = () => {

    const [selectedType, setSelectedType] = useState("All");

    const filteredProjects = selectedType === "All" ? projects : projects.filter(project => project.category === selectedType);

    return (
        <FullScreenSection
            justifyContent="center"
            alignItems="center"
            isDarkBackground
            backgroundColor="#FFABC9"
            // backgroundImage={background}
            // backgroundSize="cover"
            // backgroundRepeat="no-repeat"
            // backgroundPosition="center"
            pt={32}
            px={{ base: 0, md: 12 }}
        >
            <Box position="relative" pb={12} textAlign="center">
                <Image
                    src={sparkle}
                    position="absolute"
                    left="-50px"
                    top="-20px"
                    boxSize="40px"
                    display={{ base: "none", md: "block" }}
                />
                <Image
                    src={sparkle}
                    position="absolute"
                    transform="scaleX(-1)"
                    right="-50px"
                    top="-20px"
                    //top="50px"
                    boxSize="40px"
                    display={{ base: "none", md: "block" }}
                />
                <Heading as="h1" size={{ base: "3xl", md: "3xl" }}>all projects</Heading>

            </Box>

            <Tabs onChange={(index) => setSelectedType(projectTypes[index])} variant="unstyled" align="end">
                <TabList mr={8}>
                    {projectTypes.map((type) => (
                        <Tab 
                            key={type}
                            background="transparent"
                            color="white"
                            fontWeight="medium"
                            _selected={{
                                background: "white",
                                color: "#333",
                                fontWeight: "bold",
                            }}
                            roundedTop="xl"
                            py={3}
                            px={5}
                            mx={1}
                        >
                            {type}
                        </Tab>
                    ))}
                </TabList>
                <TabPanels>
                    {projectTypes.map((type) => (
                        <TabPanel key={type} p={0}>
                            <Box
                                display="grid"
                                gridTemplateColumns={{ base: "1fr", md: "repeat(2,minmax(0,1fr))", lg: "repeat(3,minmax(0,1fr))" }}
                                gridGap={8}
                                background="white"
                                p={12}
                                borderRadius={{ base: "none", md: "xl" }}
                            >
                                {filteredProjects.map((project) => (
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
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        </FullScreenSection>
    );
};

export default AllProjectsPage;