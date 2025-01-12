import React, { useState } from "react";
import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Image, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import projects from "../ProjectData";
import background from "../assets/noisy-gradients-bg.png";
import Card from "./Card";
import sparkle from "../assets/sparkle.svg";
import ImageModal from "./ImageModal";
import artProjects from "../ArtData";

const projectTypes = ["all", "website", "mobile app", "web app", "art gallery"];

const AllProjectsPage = () => {

    const [selectedType, setSelectedType] = useState("all");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const filteredProjects = selectedType === "art gallery" ? artProjects :
                                                              selectedType === "all" ? projects :
                                                                                       projects.filter(project => project.category === selectedType);

    const handleImageClick = (project) => {
        setSelectedImage(project.imageSrc);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedImage("");
    }
    
    return (
        <FullScreenSection
            justifyContent="center"
            alignItems="center"
            isDarkBackground
            backgroundColor="#a2a5df"
            // backgroundImage={background}
            // backgroundSize="cover"
            // backgroundRepeat="no-repeat"
            // backgroundPosition="center"
            pt={{ base: 16, md: 32}}
            pb={12}
            px={{ base: 0, md: 12 }}
        >
            <Box position="relative" pb={{base: 6, md: 12}} textAlign="center">
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
                <Heading as="h1" size={{ base: "2xl", md: "3xl" }}>all projects</Heading>

            </Box>

            <Tabs onChange={(index) => setSelectedType(projectTypes[index])} variant="unstyled" align="center">
                <TabList>
                    {projectTypes.map((type) => (
                        <Tab
                            key={type}
                            background="transparent"
                            color="white"
                            fontWeight="medium"
                            fontSize={{ base: "2xs", md: "md" }}
                            _selected={{
                                background: "white",
                                color: "#a2a5df",
                                fontWeight: "medium",
                            }}
                            _hover={{
                                background: "#8689dc",
                                color: "white",
                            }}
                            roundedTop="xl"
                            py={{ base: 2, md: 3 }}
                            px={{ base: 3, md: 5 }}
                            mx={{ base: 0, md: 1}}
                        >
                            {type}
                        </Tab>
                    ))}
                </TabList>
                <TabPanels>
                    {projectTypes.map((type) => (
                        <TabPanel key={type} p={0}>
                            {selectedType === "art gallery" ? (
                                // Display art gallery grid
                                <Box background="white" boxShadow="lg" p={16} pt={10} borderRadius={{ base: "none", sm: "xl" }} >
                                    <Heading as="h2" size="lg" textAlign="center" mb={10} color="#FFABC9">
                                            surprise! i also love to draw!
                                    </Heading>
                                    <Box
                                        display="grid"
                                        gridTemplateColumns={{ base: "1fr", md: "repeat(2,minmax(0,1fr))", lg: "repeat(3,minmax(0,1fr))" }}
                                        gridGap={8}
                                        width="100%"
                                        // background="white" 
                                        // p={8} 
                                        // boxShadow="lg" 
                                        // borderRadius={{ base: "none", sm: "xl" }}
                                    >
                                        {filteredProjects.map((project, index) => {
                                            return (
                                                <Box key={index} cursor="pointer" onClick={() => handleImageClick(project)}>
                                                    <Image src={project.imageSrc} maxHeight="350px" alt={`Art ${index}`} borderRadius={"lg"} />
                                                </Box>
                                            );
                                        })}
                                    </Box>
                                </Box>
                            ) : (
                                // Display project cards for all other projects
                                <Box
                                    display="grid"
                                    gridTemplateColumns={{ base: "1fr", md: "repeat(2,minmax(0,1fr))", lg: "repeat(3,minmax(0,1fr))" }}
                                    gridGap={8}
                                    background="white"
                                    p={12}
                                    borderRadius={{ base: "none", sm: "xl" }}
                                    boxShadow="lg"
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
                                            webLink={project.webLink}
                                        />
                                    ))}
                                </Box>
                            )}
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>

            <ImageModal 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
                imageSrc={selectedImage} 
                title={filteredProjects.find(project => project.imageSrc === selectedImage)?.title}
                description={filteredProjects.find(project => project.imageSrc === selectedImage)?.description}
            />
        </FullScreenSection>
    );
};

export default AllProjectsPage;