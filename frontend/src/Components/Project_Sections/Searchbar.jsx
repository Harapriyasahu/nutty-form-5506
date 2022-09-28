import { Box, Flex, Icon, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import React from "react";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { BiCollapse } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";

const Searchbar = () => {
  return (
    <Box
      w="1275px"
      h="94px"
      // border="1px solid red"
    >
      <Box
        w="675px"
        h="94px"
        // border="1px solid red"
        p="5"
      >
        <Flex flexDirection="row" justifyContent="space-evenly">
          <Input
            bg="whitesmoke"
            focusBorderColor="lightgreen"
            htmlSize={14}
            width="auto"
            placeholder="Search"
          />
          <Button cursor="pointer" colorScheme="whatsapp">
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
            // as={BiCollapse}
            variant="outline"
            color="gray"
            // colorScheme="gray"
            aria-label="Call Sage"
            fontSize="20px"
            // icon={BiCollapse}
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
    </Box>
  );
};

export default Searchbar;
