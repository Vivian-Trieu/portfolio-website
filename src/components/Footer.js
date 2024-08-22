import React from "react";
import {Box, Flex, Text} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#333">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <Text fontSize="md">Vivian Trieu • © 2024</Text>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
