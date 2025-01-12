import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Image,
    Text,
    Box,
    ModalCloseButton,
} from "@chakra-ui/react";

const ImageModal = ({ isOpen, onClose, imageSrc, title, description }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size={{ base: "lg", md: "xl" }} isCentered>
            <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(10px)" />
            <ModalContent background="transparent" boxShadow="none">
                <ModalCloseButton size="md" borderRadius="2xl" color="white" />
                <ModalBody
                    p={10}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Box width="100%" background="transparent" onContextMenu={(e) => e.preventDefault()}>
                        <Image
                            src={imageSrc}
                            minHeight="400px"
                            width="100%"
                            background="transparent"
                        />
                    </Box>
                    <Box
                        width="100%"
                        background="white"
                        borderRadius="xl"
                        mt={4}
                        p={6}
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                    >
                        <Box>
                            <Text fontSize="xl" color="#333" fontWeight="bold" mb={4}>{title}</Text>
                            <Text fontSize="md" color="#333">{description}</Text>
                        </Box>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default ImageModal;
