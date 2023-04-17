import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  CardFooter,
  Card,
  CardBody,
  CardHeader,
  SimpleGrid,
  Text,
  Flex,
  Box,
  Heading,
  HStack,
  Button,
  Divider,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

export default function Dashboard() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/tasks"); // Replace with your API endpoint
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  console.log(data);
  return (
    <SimpleGrid spacing={10} p={10} minChildWidth={"300px"}>
      {data &&
        data.map((task) => (
          <Card
            key={task.id}
            borderTop={"8px"}
            borderColor={"purple.400"}
            bg={"white"}
          >
            <CardHeader>
              <Flex gap={5}>
                <Box w={"50px"} h={"50px"}>
                  <Text>AV</Text>
                </Box>
                <Box>
                  <Heading as="h3" size={"sm"}>
                    {task.title}
                  </Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody color={"gray.500"}>
              <Text>{task.description}</Text>
            </CardBody>
            <Divider borderColor={"gray.200"} />
            <CardFooter>
              <HStack>
                <Button variant={"ghost"} leftIcon={<ViewIcon />}>
                  Watch
                </Button>
                <Button variant={"ghost"} leftIcon={<EditIcon />}>
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}
