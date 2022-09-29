import React from "react";
import {
  Box,
  Menu,
  MenuItem,
  MenuButton,
  Text,
  Button,
  Flex,
  Image,
  MenuList,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import styles from "../styles/navvbar.module.css";
import { Link as Routerlink } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";


const Navvbar = () => {
  const [topnav, setTopnav] = useState(false)
  const [nav, setNav] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = useState(false);


  const handleShow = () => {
    setShow(!show);
  };


  const {
    isOpen: secOpen,
    onOpen: secOnOpen,
    onClose: secOnClose,
  } = useDisclosure();



  const handelNavFix = () => {
    if (window.scrollY >= 90) {
      setTopnav(true)
      setNav(true)
    }
    else {
      setTopnav(false)
      setNav(false)
    }
  }
  window.addEventListener('scroll', handelNavFix);



  return (
    <>
      <Box className={styles.greenBar}>
        Want to become a Reseller, Affiliate, or Integration Partner? We are
        recruiting for our new Partner Programs.
        <Link
          href="https://www.timecamp.com/partners"
          isExternal
          fontWeight={"bold"}
        >
          Learn more and apply here ➡️
        </Link>
      </Box>
      <Box className={topnav ? (styles.sticky) : (styles.outsideContainer)}>
        <Flex className={styles.logoDiv}>
          <Box>
            <Routerlink to="/">
              <Image
                src="https://cdn-m.timecamp.com/img/greenbranding/colorLogo.svg"
                alt="timecamp logo"
              />
            </Routerlink>
          </Box>

          <Box className={styles.featureBox} onMouseLeave={secOnClose}>
            <Flex alignItems={"center"} justifyContent="space-between" onMouseLeave={onClose}>
              <Box>
                <Menu isOpen={isOpen}>                  
                  <MenuButton
                    colorScheme="white"
                    variant="ghost"
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    onMouseEnter={onOpen}
                    className={styles.featureBtn}
                  >
                    Features
                  </MenuButton>

                  <MenuList
                    onMouseLeave={onClose}
                    padding={0}
                    className={styles.menuu}
                    marginTop={"-6px"}
                  >
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/productivity-tracking.svg" />
                      Productivity tracking
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/automatic-time-tracking.svg" />
                      Automatic time tracking
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/reporting.svg" />
                      Reporting
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/timesheet-approvals.svg" />
                      Timesheet approval
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/invoicing.svg" />
                      Invoicing
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/billing-rates.svg" />
                      Billing rates and budgeting
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/attendance-tracking.svg" />
                      Attendance
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box onMouseEnter={secOnClose} onMouseMove={onClose}>
                <Text>Pricing</Text>
              </Box>

              <Box>
                <Menu isOpen={secOpen}>
                  <MenuButton
                    colorScheme="white"
                    variant="ghost"
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    onMouseEnter={secOnOpen}
                    className={styles.featureBtn}
                  >
                    Integrations
                  </MenuButton>
                  <MenuList
                    onMouseLeave={secOnClose}
                    padding={0}
                    className={styles.menuu}
                    marginTop={"-6px"}
                  >
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/Trello.svg" />
                      Trello
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/GCalendar.svg" />
                      Google Calender
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/iCal.svg" />
                      iCal
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/Asana.svg" />
                      Asana
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/Monday.svg" />
                      Monday.com
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/Jira.svg" />
                      Jira
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/all-integrations.svg" />
                      All integrations
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>

              <Box onMouseEnter={secOnClose}>
                <Text>Blog</Text>
              </Box>
            </Flex>
          </Box>

          <Box className={styles.bukDemo}>
            <Flex alignItems={"center"}>
              <Box>
                <Button
                  className={styles.featureBtn}
                  bg="none"
                  _hover={{ bg: "none" }}
                  borderRight="1px solid #90c1f2"
                  borderRadius={"none"}
                >
                  Book a Demo
                </Button>
              </Box>

              <Box>
                <Routerlink to="/signup">
                  <Button
                    className={styles.featureBtn}
                    bg="none"
                    _hover={{ bg: "none" }}
                  >
                    Sign in
                  </Button>
                </Routerlink>
              </Box>

              <Box>
                <button className={styles.time_Tracking_btn}>
                  Start tracking time
                </button>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
      
      <Box className={nav ? styles.leftLog : styles.outerContainr}>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          w="100%"
          padding="10px 20px"
        >
          <Box>
            <Routerlink to="/">
              <Image
                src="https://cdn-m.timecamp.com/img/greenbranding/colorLogo.svg"
                alt="timecamp logo"
              />
            </Routerlink>
          </Box>
          <Box>
            <Button bg="none" onClick={handleShow}>
              <GiHamburgerMenu color="gray" />
            </Button>
          </Box>
        </Flex>

        {show ? (
          <Box className={styles.bukDemo}>
            <Flex flexDirection="column">
              <Box>
                <Menu >
                  <MenuButton
                    colorScheme="white"
                    variant="ghost"
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    className={styles.featureBtn}
                  >
                    Features
                  </MenuButton>
                  <MenuList
                    padding={0}
                    className={styles.menuu}
                  >
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/productivity-tracking.svg" />
                      Productivity tracking
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/automatic-time-tracking.svg" />
                      Automatic time tracking
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/reporting.svg" />
                      Reporting
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/timesheet-approvals.svg" />
                      Timesheet approval
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/invoicing.svg" />
                      Invoicing
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/billing-rates.svg" />
                      Billing rates and budgeting
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/attendance-tracking.svg" />
                      Attendance
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box >
                <Button bg="none">Pricing</Button>
              </Box>
              <Box>
                <Menu>
                  <MenuButton
                    colorScheme="white"
                    variant="ghost"
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    className={styles.featureBtn}
                  >
                    Integrations
                  </MenuButton>
                  <MenuList
                    padding={0}
                    className={styles.menuu}
                  >
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/Trello.svg" />
                      Trello
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/GCalendar.svg" />
                      Google Calender
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/iCal.svg" />
                      iCal
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/Asana.svg" />
                      Asana
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/Monday.svg" />
                      Monday.com
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/Jira.svg" />
                      Jira
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/all-integrations.svg" />
                      All integrations
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box >
                <Button bg="none">Blog</Button>
              </Box>
              <Box>
                <Button
                  className={styles.featureBtn}
                  bg="none"
                  _hover={{ bg: "none" }}
                  borderRadius={"none"}
                >
                  Book a Demo
                </Button>
              </Box>
              <Box>
                <Routerlink to="/register"><Button
                  className={styles.featureBtn}
                  bg="none"
                  _hover={{ bg: "none" }}
                >
                  Sign in
                </Button>
                </Routerlink>
              </Box>
              <Box>
                <button className={styles.timeTracking} >
                  Start tracking time
                </button>
              </Box>
            </Flex>
          </Box>
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

export default Navvbar;