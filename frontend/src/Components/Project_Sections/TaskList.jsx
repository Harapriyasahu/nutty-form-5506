import { Box, Button, Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { GrPieChart } from "react-icons/gr";
import { BsThreeDots, BsPlay } from "react-icons/bs";
import { Show, Hide } from '@chakra-ui/react'

const TaskList = () => {
  return (
    <Box w="1275px" h="auto">
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
              color="gray"
              borderRadius="4px"
              ml="1.2rem"
              w="620px"
              h="auto"
              border="1px solid lightgrey"
            >
              {
                // Loop over each projects
                <Accordion defaultIndex={[0]} allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Project 1 title
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel p="0">
                      <Box
                        color="gray"
                        borderRadius="4px"
                        // ml='0rem'
                        // ml="1.2rem"
                        w="620px"
                        h="52px"
                        border="1px solid lightgrey"
                      ></Box>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton _hover={{bg: 'none'}}>
                      {/* <AccordionIcon /> */}
                        <Flex w='618px' flexDirection='row' justifyContent='space-around'>
                          <Box flex="1" textAlign="left" w='300px' color='blue'>
                            <Flex>
                              <AccordionIcon mt='0.6rem' mr='1rem'/>
                              <Text mt='0.4rem'>Project 2 title</Text>
                            </Flex>
                          </Box>

                          <Box w='280px' display='none' _hover={{display:'block'}}>
                            <Flex flexDirection='row' justifyContent='space-evenly'>
                            <Button cursor="pointer" colorScheme="whatsapp">
                              Add task
                            </Button>{" "}
                            <IconButton
                              cursor="pointer"
                              icon={<Icon as={GrPieChart} color="gray" borderColor='gray' stroke='grey'/>}
                              variant="outline"
                              color="gray"
                              aria-label="Call Sage"
                              fontSize="20px"
                              stroke='grey'
                            />
                            <IconButton
                              cursor="pointer"
                              icon={<Icon as={BsThreeDots} />}
                              variant="outline"
                              color="gray"
                              aria-label="Call Sage"
                              fontSize="20px"
                            />
                            <IconButton
                              cursor="pointer"
                              icon={<Icon as={BsPlay} />}
                              variant="outline"
                              color="gray"
                              aria-label="Call Sage"
                              fontSize="20px"
                            />{" "}
                            </Flex>
                          </Box>
                        </Flex>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel p="0">
                      <Box
                        color="gray"
                        borderRadius="4px"
                        // pr='1rem'
                        // mr='1rem'
                        // ml="1.2rem"
                        w="620px"
                        h="52px"
                        border="1px solid lightgrey"
                      ></Box>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              }
            </Box>
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
