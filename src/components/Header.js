import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Button, IconButton, VStack, Collapse, useDisclosure, textDecoration } from "@chakra-ui/react";
import resumePDF from '../assets/resume.pdf';
import { Link, useNavigate } from "react-router-dom";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: vivian.dtrieu@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Vivian-Trieu",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/vivian-dtrieu/",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const { isOpen, onToggle, onClose } = useDisclosure();
  const navigate = useNavigate();

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;

      if (!headerElement) {
        return;
      }

      // Close the mobile menu when scrolling down
      if (prevScrollPos < currentScrollPos && isOpen) {
        onClose();
      }

      if (currentScrollPos === 0) {
        // At the top of the page
        headerElement.style.transform = "translateY(0)";
        headerElement.style.backgroundColor = "transparent";
      } else if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
        headerElement.style.backgroundColor = "rgba(51, 51, 51, 0.5)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen, onClose]);

  const handleClick = (anchor) => () => {

    if(isOpen) {
      onClose();
    }
    navigate("/");

    setTimeout(() => {
      const id = `${anchor}-section`;
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        //onToggle();
      }
    }, 300);
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transition="transform 0.3s ease-in-out, background-color 0.3s ease-in-out"
      backgroundColor="rgba(0, 0, 0, 0)"
      ref={headerRef}
      zIndex={3}
      width="100vw"
      overflow="auto"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={{ base: 5, md: 16 }}
          py={4}
          justifyContent={{ base: "none", md: "space-between" }}
        >
          <nav>
            <HStack spacing={8} display={{ base: "none", md: "flex" }}>
              {socials.map((social, index) => (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <IconButton
            display={{ base: "block", md: "none" }}
            aria-label="Open Menu"
            icon={isOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
            onClick={onToggle}
            backgroundColor="transparent"
            color="white"
            _hover={{ bg: "transparent" }}
          />
          <nav>
            <HStack spacing={8} display={{ base: "none", md: "flex" }}>
              <Link to="/">home</Link>
              <Link to="/all-projects">projects</Link>
              <a onClick={handleClick("contactme")}>contact</a>
              <Button
                as="a"
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                bg="#333333"
                color="white"
                _hover={{ bg: "#FFABC9" }}
              >
                resume
              </Button>
            </HStack>
          </nav>
        </HStack>

        <Collapse in={isOpen} animateOpacity>
          <VStack
            //bg="rgba(51, 51, 51, 0.5)"
            bg="white"
            color="#FFABC9"
            alignItems="center"
            spacing={6}
            p={4}
            mb={5}
            mx="20px"
            borderRadius={30}
            display={{ md: "none" }}
            transition="opacity 0.2s ease-in-out"
          >
            <VStack spacing={6} color="#333">
              <Link to="/">home</Link>
              <Link to="/all-projects">projects</Link>
              <a onClick={handleClick("contactme")}>contact</a>
              <Button
                as="a"
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                bg="#333333"
                color="white"
                _hover={{ bg: "#FFABC9" }}
              >
                resume
              </Button>
            </VStack>
            <HStack spacing={10} justifyContent="center">
              {socials.map((social, index) => (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </VStack>
        </Collapse>
      </Box>
    </Box>
  );
};
export default Header;
