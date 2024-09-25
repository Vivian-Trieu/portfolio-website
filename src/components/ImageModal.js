import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody, Image } from "@chakra-ui/react";

const ImageModal = ({ isOpen, onClose, imageSrc }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
            <ModalOverlay />
            <ModalContent background="transparent" boxShadow="none">
                <ModalBody p={0}>
                    <Image src={imageSrc} width="100%" background="transparent"/>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default ImageModal;