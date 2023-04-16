import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Navbar() {
  const bgcolors = ["red", "blue", "green", "yellow"];
  return (
    <Flex as="nav" p={"10px"} alignItems={"center"}>
      <Heading as={"h1"}>Dojo Tasks</Heading>
      <Spacer />
      <HStack spacing={"15px"}>
        <Box bg={"gray.200"} p={"10px"}>
          MR
        </Box>
        <Text>test@gmail.com</Text>
        <Button colorScheme="purple">Logout</Button>
      </HStack>
      {/* {bgcolors.map((color, index) => (
        <Box key={index + color} w={"150px"} h={"50px"} bg={color}>
          {index + 1}
        </Box>
      ))} */}
    </Flex>
  );
}

export default Navbar;
