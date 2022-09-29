import { Box, Divider, Flex, Icon, List } from "@chakra-ui/react";
import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { BiHelpCircle, BiUserPlus } from "react-icons/bi";
import { Image } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

const hover = {
  color: "#65b491",
  cursor: "pointer",
  // bool: "true",
};
const hover2 = {
  color: "#65b491",
  cursor: "pointer",
  // bool: "true",
};
const hover3 = {
  color: "#65b491",
  cursor: "pointer",
  // bool: "true",
};

const hover_img = {
  color: "#65b491",
  cursor: "pointer",
  border: "1px solid #65b491",
  padding: "2px",
  width: "36px",
  height: "36px",
  borderRadius: "full",
};

const inset_none = {
  inset: "none",
};

// let bool = false;

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      w="1275px"
      h="auto"
      // border="1px solid blue"
      p="13px"
    >
      <Flex flexDirection="row" justifyContent="space-between">
        <Box color="#3E3E3E" fontSize="18px" ml="14px" fontWeight="semibold">
          Projects
        </Box>
        <Box mr="16px" minW="180px">
          <Flex flexDirection="row" justifyContent="space-around">
            <Icon
              _hover={hover}
              color="#7a7978"
              as={IoSettingsOutline}
              w="28px"
              h="28px"
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
            ></Icon>

            {/* {bool */}
              {/* ? true( */}
                  <Menu isOpen={isOpen} style={{ inset: null }} ml="10rem">
                    <MenuList
                      mt="7rem"
                      ml="70rem"
                      // onMouseEnter={onOpen}
                      // onMouseLeave={onClose}
                      style={{ inset: null }}
                    >
                      <MenuItem>Settings</MenuItem>
                      <MenuItem>Integrations</MenuItem>
                      <MenuItem>Subscription</MenuItem>
                    </MenuList>
                  </Menu>
                {/* ) */}
              {/* : ""} */}

            <Icon
              // _hover={hover2}
              color="#7a7978"
              as={BiHelpCircle}
              w="28px"
              h="28px"
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
            ></Icon>

            {/* {bool */}
              {/* ? true( */}
                  <Menu isOpen={isOpen} style={{ inset: null }} ml="10rem">
                    <MenuList
                      mt="7rem"
                      ml="80rem"
                      onMouseEnter={onOpen}
                      onMouseLeave={onClose}
                      style={{ inset: null }}
                    >
                      <MenuItem>Help</MenuItem>
                      <MenuItem>Knowledge base</MenuItem>
                      <MenuItem>Send feedback</MenuItem>
                      <MenuItem>Become a partner</MenuItem>
                      <Divider color="grey"></Divider>
                      <MenuItem>What's new</MenuItem>
                      <MenuItem>Suggest a feature</MenuItem>
                    </MenuList>
                  </Menu>
                {/* ) */}
              {/* : ""} */}

            <Icon
              // _hover={hover3}
              color="#7a7978"
              as={BiUserPlus}
              w="30px"
              h="30px"
            ></Icon>

            <Image
              // _hover={hover3}
              src="https://www.gravatar.com/avatar/cc306f4d0b49ec63773e34e7a89f4583?s=60&d=mm"
              alt="User"
              w="32px"
              h="32px"
              borderRadius="full"
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
            />

            {/* {bool */}
              {/* ? true( */}
                  <Menu isOpen={isOpen} style={{ inset: null }} ml="10rem">
                    <MenuList
                      mt="7rem"
                      ml="90rem"
                      onMouseEnter={onOpen}
                      onMouseLeave={onClose}
                      style={{ inset: null }}
                    >
                      <MenuItem>EmailId</MenuItem>
                      <Divider color="grey"></Divider>
                      <MenuItem>Download App</MenuItem>
                      <MenuItem>Browser Plugin</MenuItem>
                      <Divider color="grey"></Divider>
                      <MenuItem>Logout</MenuItem>
                    </MenuList>
                  </Menu>
                {/* ) */}
              {/* : ""} */}
          </Flex>
        </Box>
      </Flex>
    </Box>
    
  );
};

export default Navbar;
