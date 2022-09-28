import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const TaskList = () => {
  return (
    <Box w="1275px" h="600px">
      <Box
        boxSizing="border-box"
        w="1275px"
        h="580px"
        // border="1px solid black"
      >
        <Flex
          flexDirection="row"
          // border="1px solid green"
          justifyContent="space-around"
        >
          {/* Left Side TaskList Section */}
          <Box
            w="700px"
            h="108px"
            // border="1px solid blue"
            p="2"
          >
            <Box
              color="lightgray"
              borderRadius="4px"
              ml="1.2rem"
              w="620px"
              h="100px"
              border="1px solid lightgrey"
            ></Box>
          </Box>

          {/* Right Side Add/Edit Section */}
          <Box
            w="490px"
            h="463px"
            // border="1px solid red"
            mr="6rem"
            p="2"
          >
            <Box
              color="lightgray"
              borderRadius="4px"
              ml="1rem"
              w="453px"
              h="100px"
              border="1px solid lightgrey"
            >
              <Text mt="2rem" color="lightgray">
                Choose project or task to edit
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default TaskList;
