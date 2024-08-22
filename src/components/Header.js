import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Button } from "@chakra-ui/react";
import resumePDF from '../assets/resume.pdf';

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

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;

      if (!headerElement) {
        return;
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
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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
      // backgroundColor=""
      ref={headerRef}
      zIndex={3}
    >
      <Box color="white" maxWidth="100%" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socials.map((social, index) => (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={social.icon} size="2x"/>
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#projects" onClick={handleClick("projects")}>projects</a>
              <a href="#contact-me" onClick={handleClick("contactme")}>contact</a>
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
      </Box>
    </Box>
  );
};
export default Header;