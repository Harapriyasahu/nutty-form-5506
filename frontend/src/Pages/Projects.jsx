import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "../Components/Project_Sections/Navbar";

const Projects = () => {
  return (
    <Box 
    // bg="whitesmoke" 
    // w='1300px' 
    w='1275px' 
    h='100vh' 
    // p={4} 
    color="black" 
    border='1px solid black'
    ml='243px'
    >
        {/* Top bar showing trial period */}
      <Box w='1275px' h='62px' border='1px solid red'></Box>

      {/* Navbar Section */}
      {/* <Box w='1275px' h='62px' border='1px solid blue'></Box> */}
      <Navbar/>

      {/* Searchbar Section */}
      <Box w='1275px' h='94px' border='1px solid red'></Box>

      {/* Outer Box */}
      <Flex 
      flexDirection='row'
      w='1275px' 
      h='600px' 
      border='1px solid black'
      >
        {/* Left Side TaskList Section */}
        <Box w='609px' h='108px' border='1px solid blue'></Box>

        {/* Right Side Add/Edit Section */}
        <Box w='490px' h='463px' border='1px solid red'></Box>
      </Flex>

    </Box>
  );
};

export default Projects;
