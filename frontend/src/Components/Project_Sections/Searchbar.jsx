import { Box, Flex, Icon, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import React from "react";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { BiCollapse } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { useState } from "react";
import TaskList from "./TaskList";

const Searchbar = () => {
  const [openInputBox, setOpenInputBox] = useState(false);

  const [newProject, setNewProject] = useState('');

  const [projects, setProjects] = useState([]);

  console.log(newProject)

  return (
    <>
    <Box
      w="1275px"
      // h="94px"
      h="auto"
      // border="1px solid red"
    >
      <Box
        w="675px"
        // h="94px"
        h="auto"
        // border="1px solid red"
        pl="5"
        pr="5"
        pt="5"
        // p="5"
        pb="2"
      >
        <Flex flexDirection="row" justifyContent="space-evenly">
          <Input
            bg="whitesmoke"
            focusBorderColor="lightgreen"
            htmlSize={14}
            width="auto"
            placeholder="Search"
          />
          <Button
            cursor="pointer"
            colorScheme="whatsapp"
            onClick={() => setOpenInputBox(true)}
          >
            Add Project
          </Button>
          {/* <InputGroup> */}
          {/* <InputLeftAddon w='2' bg='white' children={<Icon as={FiFilter} />} /> */}

          <Select cursor="pointer" placeholder="Filter" w="26">
            <option value="option1">All Tasks</option>
            <option value="option2">My Tasks</option>
          </Select>
          {/* </InputGroup> */}

          <IconButton
            cursor="pointer"
            icon={<Icon as={BiCollapse} />}
            variant="outline"
            color="gray"
            aria-label="Call Sage"
            fontSize="20px"
          />
          <Button cursor="pointer" color="gray" variant="outline">
            Archived
          </Button>
          <IconButton
            cursor="pointer"
            // as={BsThreeDots}
            icon={<Icon as={BsThreeDots} />}
            variant="outline"
            color="gray"
            // aria-label="Call Sage"
            // fontSize="12px"
            w="10"
            h="10"
            // icon={BsThreeDots}
          />
        </Flex>
      </Box>

      {openInputBox === true ? (
        <Box
          w="660px"
          h="auto"
          // border="1px solid red"
          pl="5"
          pr="5"
          pt="5"
          // p="5"
          pb="2"
          boxSizing="border-box"
          ml="0.4rem"
        >
          <Flex justifyContent='space-between'>
            <Input
              value={newProject}
              width="auto"
              htmlSize={36}
              placeholder="Enter the name of a new project or task..."
              onChange={(e) => setNewProject(e.target.value)}
            />
            <Button cursor="pointer" colorScheme="whatsapp" onClick={() => setProjects([...projects, newProject])}>
              Create new project
            </Button>
            <Button
              cursor="pointer"
              color="gray"
              variant="outline"
              onClick={() => setOpenInputBox(false)}
            >
              Cancel
            </Button>
          </Flex>
        </Box>
      ) : (
        ""
      )}
    </Box>
    <TaskList projects={projects}/>

    </>
  );
};

export default Searchbar;
