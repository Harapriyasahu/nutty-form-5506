import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  IconButton,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
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
import { CloseButton } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { useState } from "react";

const TaskList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [textBox, setTextBox] = useState(false);
  const [editBox, setEditBox] = useState(false);
  const [closeTextBox, setCloseTextBox] = useState(false);
  const [closeEditBox, setCloseEditBox] = useState(false);

  const handleClose = () => {
    setTextBox(false);
    setCloseTextBox(false);
  };

  const handleShowTask = () => {
    if (editBox === true) {
      setEditBox(false);
    }
    setCloseEditBox(false);
    setCloseTextBox(true);
    setTextBox(true);
  };

  const handleEditClose = () => {
    setEditBox(false);
    setCloseEditBox(true);
  };

  const handleEditShowTask = () => {
    if (textBox === true) {
      setTextBox(false);
    }
    setCloseEditBox(false);
    setCloseTextBox(true);
    setEditBox(true);
  };

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
            h="80px"
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
                      <AccordionButton role="group">
                        <Flex
                          w="618px"
                          flexDirection="row"
                          justifyContent="space-around"
                          h="40px"
                        >
                          <Box flex="1" textAlign="left" w="300px">
                            <Flex>
                              <AccordionIcon mt="0.4rem" mr="1rem" />
                              <Icon
                                mr="0.4rem"
                                mt="0.6rem"
                                viewBox="0 0 200 200"
                                color="orange.400"
                              >
                                <path
                                  fill="currentColor"
                                  d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                                />
                              </Icon>
                              <Text mt="0.2rem">Project 2 title</Text>
                            </Flex>
                          </Box>

                          <Box
                            w="280px"
                            display="none"
                            _groupHover={{ display: "block" }}
                          >
                            <Flex
                              flexDirection="row"
                              justifyContent="space-evenly"
                            >
                              <Button
                                cursor="pointer"
                                onClick={handleShowTask}
                                colorScheme="whatsapp"
                              >
                                Add task
                              </Button>{" "}
                              <IconButton
                                cursor="pointer"
                                icon={
                                  <Icon
                                    as={GrPieChart}
                                    color="gray"
                                    borderColor="gray"
                                    stroke="grey"
                                  />
                                }
                                variant="outline"
                                color="gray"
                                aria-label="Call Sage"
                                fontSize="20px"
                                stroke="grey"
                              />
                              <IconButton
                                onClick={handleEditShowTask}
                                cursor="pointer"
                                icon={<Icon as={BsThreeDots} />}
                                variant="outline"
                                color="gray"
                                aria-label="Call Sage"
                                fontSize="20px"
                              />
                              <IconButton
                                onClick={onOpen}
                                cursor="pointer"
                                icon={<Icon as={BsPlay} />}
                                variant="outline"
                                // color="gray"
                                aria-label="Call Sage"
                                fontSize="20px"
                                color="white"
                                bg="#4bb063"
                                _hover={{ bg: "#4bb063" }}
                              />{" "}
                            </Flex>
                          </Box>
                        </Flex>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      p="2"
                      _hover={{ bg: "whitesmoke", cursor: "pointer" }}
                    >
                      <Box
                        color="gray"
                        borderRadius="4px"
                        w="618px"
                        h="40px"
                        role="group"
                        p="1"
                      >
                        <Flex
                          w="600px"
                          flexDirection="row"
                          justifyContent="space-around"
                        >
                          <Box flex="1" textAlign="left" w="300px">
                            <Flex>
                              <Icon
                                ml="4.4rem"
                                mt="0.6rem"
                                viewBox="0 0 200 200"
                                color="green.500"
                              >
                                <path
                                  fill="currentColor"
                                  d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                                />
                              </Icon>
                              <Text ml="0.4rem" mt="0.2rem">
                                Task 2 title
                              </Text>
                            </Flex>
                          </Box>

                          <Box
                            // pt='2'
                            w="280px"
                            display="none"
                            _groupHover={{ display: "block" }}
                          >
                            <Flex
                              flexDirection="row"
                              justifyContent="space-evenly"
                            >
                              <Button
                                cursor="pointer"
                                onClick={handleShowTask}
                                colorScheme="whatsapp"
                              >
                                Add task
                              </Button>{" "}
                              <IconButton
                                cursor="pointer"
                                icon={
                                  <Icon
                                    as={GrPieChart}
                                    color="gray"
                                    borderColor="gray"
                                    stroke="grey"
                                  />
                                }
                                variant="outline"
                                color="gray"
                                aria-label="Call Sage"
                                fontSize="20px"
                                stroke="grey"
                              />
                              <IconButton
                                onClick={handleEditShowTask}
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
                                // color="gray"
                                aria-label="Call Sage"
                                fontSize="20px"
                                bg="#4bb063"
                                color="white"
                                _hover={{ bg: "#4bb063" }}
                              />{" "}
                            </Flex>
                          </Box>
                        </Flex>
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              }
            </Box>
          </Box>

          {/* Right Side Add/Edit Section */}
          <Box
            w="490px"
            h="auto"
            // border="1px solid red"
            mr="6rem"
            p="2"
          >
            <Box
              color="gray"
              borderRadius="4px"
              ml="1rem"
              w="490px"
              // h="auto"
              h="400px"
              border="1px solid lightgrey"
              p="4"
              overflow="scroll"
              overflowX="hidden"
            >
              {closeTextBox === false ? (
                <Box scrollBehavior="none" h="100px">
                  <Text mt="2rem" color="lightgray">
                    Choose project or task to edit
                  </Text>
                </Box>
              ) : (
                ""
              )}
              {closeEditBox === true ? (
                <Box scrollBehavior="none" h="100px">
                  <Text mt="2rem" color="lightgray">
                    Choose project or task to edit
                  </Text>
                </Box>
              ) : (
                ""
              )}

              {textBox === false ? (
                ""
              ) : (
                <Box w="453px">
                  <Box w="446px" mb="0.8rem">
                    <Flex justifyContent="space-between">
                      <Text>Add Task</Text>
                      <Button
                        height="0"
                        variant="unstyled"
                        onClick={handleClose}
                      >
                        X
                      </Button>
                    </Flex>
                  </Box>

                  <Box
                    w="446px"
                    // h="20px"
                    mb="0.4rem"
                  >
                    <FormControl>
                      <FormLabel>First Project/</FormLabel>
                      <Input type="Task name..." />

                      <FormLabel>Description</FormLabel>
                      <Input type="To add description first save your task" />
                    </FormControl>
                  </Box>

                  <Divider mt="0.4rem"></Divider>

                  <Box
                    w="446px"
                    // h="20px"
                    mb="0.8rem"
                  >
                    <FormControl>
                      <FormLabel>Budget</FormLabel>
                      <Flex justifyContent="space-around">
                        <Select placeholder="Estimated hours" w="280px">
                          <option>Estimated hours</option>
                          <option>Estimated fee</option>
                        </Select>
                        <Input
                          w="160px"
                          type="To add description first save your task"
                        />
                      </Flex>
                    </FormControl>
                  </Box>

                  <Box
                    w="446px"
                    // h="20px"
                    mb="0.8rem"
                  >
                    <Flex alignItems="flex-start">
                      <Checkbox defaultChecked>
                        Time from this task is billable by default
                      </Checkbox>
                    </Flex>
                  </Box>

                  <Divider mb="0.8rem"></Divider>

                  <Box
                    w="446px"
                    // h="20px"
                  >
                    <FormLabel>Tags</FormLabel>
                    {/* <Text>Tags</Text> */}
                  </Box>

                  <Box w="446px" mb="0.8rem">
                    <Flex justifyContent="space-around">
                      <Text mt="1.2rem" fontSize="12px">
                        All tags allowed to be selected when users track time.
                      </Text>
                      <Button colorScheme="grey" variant="outline">
                        Define tag list
                      </Button>
                    </Flex>
                  </Box>

                  <Box
                    w="446px"
                    // h="20px"
                    mb="0.8rem"
                  >
                    <Button w="100%" colorScheme="grey" variant="outline">
                      Enable keywords
                    </Button>
                  </Box>

                  <Divider></Divider>

                  <Box
                    w="446px"
                    // h="20px"
                  >
                    <Flex flexDirection="row" alignItems="flex-start">
                      <Button colorScheme="whatsapp" variant="solid">
                        Add Task
                      </Button>
                      <Button ml="0.8rem" colorScheme="grey" variant="outline">
                        Cancel
                      </Button>
                    </Flex>
                  </Box>
                </Box>
              )}

              {editBox === false ? (
                ""
              ) : (
                <Box
                  w="453px"
                  // h="200px"
                >
                  <Box
                    w="446px"
                    mb="0.8rem"
                    // h="20px"
                  >
                    <Flex justifyContent="space-between">
                      <Text>Edit Task</Text>
                      {/* <CloseButton onClick={() => handleClose} /> */}
                      <Button
                        height="0"
                        variant="unstyled"
                        onClick={handleEditClose}
                      >
                        X
                      </Button>
                    </Flex>
                  </Box>

                  <Box w="446px" mb="0.8rem">
                    <FormControl>
                      <FormLabel>First Project/</FormLabel>
                      <Input type="Task name..." />
                    </FormControl>
                  </Box>

                  <Box w="446px" mb="0.8rem">
                    <Flex justifyContent="space-between">
                      <Text mt="0.5rem" w="50px">
                        People
                      </Text>

                      <Box w="280px">
                        <Flex justifyContent="space-between">
                          <Button colorScheme="grey" variant="outline">
                            Assign group
                          </Button>
                          <Button colorScheme="grey" variant="outline">
                            Assign People
                          </Button>
                        </Flex>
                      </Box>
                    </Flex>
                  </Box>

                  <Box w="446px" mb="0.4rem">
                    <Flex>
                      <Text mt="0.5rem" w="180px">
                        deepak.onlinework13
                      </Text>
                      <Select placeholder="Project Manager" w="280px">
                        <option>Project Manager</option>
                        <option>Regular User</option>
                      </Select>
                    </Flex>
                  </Box>

                  <Divider mt="0.4rem"></Divider>

                  <Box w="446px" mb="0.4rem">
                    <FormControl>
                      <FormLabel>Description</FormLabel>
                      <Input type="To add description first save your task" />
                    </FormControl>
                  </Box>

                  <Box
                    w="446px"
                    // h="20px"
                    mb="0.8rem"
                  >
                    <FormControl>
                      <FormLabel>Budget</FormLabel>
                      <Flex justifyContent="space-around">
                        <Select placeholder="Estimated hours" w="280px">
                          <option>Estimated hours</option>
                          <option>Estimated fee</option>
                        </Select>
                        <Input
                          w="160px"
                          type="To add description first save your task"
                        />
                      </Flex>
                    </FormControl>
                  </Box>

                  <Box
                    w="446px"
                    // h="20px"
                    mb="0.8rem"
                  >
                    <Flex alignItems="flex-start">
                      <Checkbox defaultChecked>
                        Time from this task is billable by default
                      </Checkbox>
                    </Flex>
                  </Box>

                  <Divider mb="0.8rem"></Divider>

                  <Box
                    w="446px"
                    // h="20px"
                  >
                    <FormLabel>Tags</FormLabel>
                    {/* <Text>Tags</Text> */}
                  </Box>

                  <Box w="446px" mb="0.8rem">
                    <Flex justifyContent="space-around">
                      <Text mt="1.2rem" fontSize="12px">
                        All tags allowed to be selected when users track time.
                      </Text>
                      <Button colorScheme="grey" variant="outline">
                        Define tag list
                      </Button>
                    </Flex>
                  </Box>

                  <Box
                    w="446px"
                    // h="20px"
                    mb="0.8rem"
                  >
                    <Button w="100%" colorScheme="grey" variant="outline">
                      Enable keywords
                    </Button>
                  </Box>

                  <Divider mb="0.8rem"></Divider>

                  <Box
                    w="446px"
                    // h="20px"
                  >
                    <Flex flexDirection="row" alignItems="flex-start">
                      <Button colorScheme="whatsapp" variant="solid">
                        Save
                      </Button>
                      <Button ml="0.8rem" colorScheme="grey" variant="outline">
                        Cancel
                      </Button>
                    </Flex>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default TaskList;
