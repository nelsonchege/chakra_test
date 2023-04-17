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
  
  return (
    <Flex as="nav" p={"40px"} alignItems={"center"}>
      <Heading as={"h1"}>Dojo Tasks</Heading>
      <Spacer />
      <HStack spacing={"15px"}>
        <Box bg={"gray.200"} p={"10px"}>
          MR
        </Box>
        <Text>test@gmail.com</Text>
        <Button colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>
  );
}

export default Navbar;
