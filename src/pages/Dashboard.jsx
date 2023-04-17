import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { useState, useEffect }  from "react";

export default function Dashboard() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/tasks'); // Replace with your API endpoint
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  console.log(data)
  return (
    <SimpleGrid spacing={10} p={10} minChildWidth={"250px"}>
      <Box bg={"white"} h={"200px"} border={"1px solid"}></Box>
      <Box bg={"white"} h={"200px"} border={"1px solid"}></Box>
      <Box bg={"white"} h={"200px"} border={"1px solid"}></Box>
      <Box bg={"white"} h={"200px"} border={"1px solid"}></Box>

      <Box bg={"white"} h={"200px"} border={"1px solid"}></Box>
      <Box bg={"white"} h={"200px"} border={"1px solid"}></Box>
      <Box bg={"white"} h={"200px"} border={"1px solid"}></Box>
      <Box bg={"white"} h={"200px"} border={"1px solid"}></Box>

      <Box bg={"white"} h={"200px"} border={"1px solid"}></Box>
      <Box bg={"white"} h={"200px"} border={"1px solid"}></Box>
      <Box bg={"white"} h={"200px"} border={"1px solid"}></Box>
      <Box bg={"white"} h={"200px"} border={"1px solid"}></Box>
    </SimpleGrid>
  );
}
