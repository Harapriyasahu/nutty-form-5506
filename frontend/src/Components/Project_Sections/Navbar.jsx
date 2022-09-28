import { Box, Flex, Icon, List } from "@chakra-ui/react";
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
  // settingDropdown: {
  //   display: 'block',
  //   zIndex: '999'
  // }
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

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w="1275px" h="auto" border="1px solid blue" p="13px">
      <Flex flexDirection="row" justifyContent="space-between">
        <Box color="#3E3E3E" fontSize="18px" ml="12px" fontWeight="semibold">
          Projects
        </Box>
        <Box mr="16px" minW="180px">
          <Flex flexDirection="row" justifyContent="space-around">
            <Box>
              <Flex flexDirection="column">
                <Icon
                  _hover={hover}
                  color="#7a7978"
                  as={IoSettingsOutline}
                  w="28px"
                  h="28px"
                  onMouseEnter={onOpen}
                  onMouseLeave={onClose}
                ></Icon>

                {/* <Box style={{inset: 0}}> */}
                {/* <Box w='60px' h='100px'> */}

                <Menu isOpen={isOpen}>
                    <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} style={{inset: 'none'}}>
                      <MenuItem>Settings</MenuItem>
                      <MenuItem>Integrations</MenuItem>
                      <MenuItem>Subscription</MenuItem>
                    </MenuList>
                  </Menu>

                {/* <Popover isOpen={isOpen}>
                  <PopoverContent onMouseEnter={onOpen} onMouseLeave={onClose}>
                    <PopoverArrow />
                    <PopoverBody>
                      <List>Settings</List>
                      <List>Integrations</List>
                      <List>Subscription</List>
                    </PopoverBody>
                  </PopoverContent>
                </Popover> */}
                {/* </Box> */}
              </Flex>
            </Box>

            <Icon
              _hover={hover}
              color="#7a7978"
              as={BiHelpCircle}
              w="28px"
              h="28px"
            ></Icon>

            <Icon
              _hover={hover}
              color="#7a7978"
              as={BiUserPlus}
              w="30px"
              h="30px"
            ></Icon>

            <Image
              _hover={hover_img}
              src="https://www.gravatar.com/avatar/cc306f4d0b49ec63773e34e7a89f4583?s=60&d=mm"
              alt="User"
              w="32px"
              h="32px"
              borderRadius="full"
            />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
