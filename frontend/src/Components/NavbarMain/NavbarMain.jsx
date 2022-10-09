import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Tag,
  Image,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

export default function NavbarMain() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Box bgColor="#25cf60" color="white" textAlign="center" p="3">
        <Text>
          Want to become a Reseller, Affiliate, or Integration Partner? We are
          recruiting for our new Partner Programs.{" "}
          <b>Learn more and apply here ➡️.</b>
        </Text>
      </Box>
      <Box w="100%" zIndex="55" position="sticky" top="0">
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("black", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex
            py="5"
            flex={{ base: 1 }}
            justify={{ base: "start", md: "start" }}
          >
            <Text
              textAlign={useBreakpointValue({
                base: "start",
                md: "start",
                lg: "left",
              })}
              fontFamily={"heading"}
              ml={{ base: 0, md: 0, lg: "8rem" }}
              color={useColorModeValue("gray.800", "white")}
            >
              {" "}
              <RouterLink to="/">
                <img
                  src="https://cdn-m.timecamp.com/img/greenbranding/colorLogo.svg"
                  alt="timecamp logo"
                />
              </RouterLink>
            </Text>

            <Flex display={{ base: "none", md: "none", lg: "flex" }} ml={20}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 1, lg: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Flex
              flex={{ base: 1, md: 1, lg: "auto" }}
              ml={{ base: -2 }}
              justify={"flex-end"}
              display={{ base: "flex", md: "flex", lg: "none" }}
            >
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
              />
            </Flex>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("black", "gray.200");
  const linkHoverColor = useColorModeValue("black", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Flex direction={"row"} alignItems="center" gap="2rem">
      {NAV_ITEMS.map((navItem) => (
        <Flex key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <RouterLink
                p={2}
                to={navItem.path ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </RouterLink>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Flex>
      ))}
      <Button bgColor="#f7b801" color="white" borderRadius="20px" p="5">
        <RouterLink to="/login"> Start tracking time</RouterLink>
      </Button>
    </Flex>
  );
};

const DesktopSubNav = ({ label, path }) => {
  return (
    <Link
      as={RouterLink}
      to={path ?? "#"}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("#25cf60", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Text
          transition={"all .3s ease"}
          _groupHover={{ color: "dark" }}
          fontWeight={500}
        >
          {label}
        </Text>

        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"green"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ lg: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <Button bgColor="#f7b801" color="white" borderRadius="20px" px="5">
        Start tracking time
      </Button>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, path }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <RouterLink
        display="flex"
        py={2}
        as={Link}
        to={path ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </RouterLink>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} to={child.to}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: (
      <Flex gap=".1rem" alignItems={"center"}>
        Features <FaAngleDown />
      </Flex>
    ),
    children: [
      {
        label: (
          <Flex gap="1rem">
            {" "}
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/productivity-tracking.svg"
              alt=""
            />
            Productivity tracking
          </Flex>
        ),
        path: "/login",
      },
      {
        label: (
          <Flex gap="1rem">
            {" "}
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/productivity-tracking.svg"
              alt=""
            />
            Automatic time tracking
          </Flex>
        ),
        path: "/login",
      },
      {
        label: (
          <Flex gap="1rem">
            {" "}
            <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/reporting.svg" />
            Reporting
          </Flex>
        ),
        path: "#",
      },
      {
        label: (
          <Flex gap="1rem">
            {" "}
            <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/timesheet-approvals.svg" />
            Timesheet approval
          </Flex>
        ),
        path: "/login",
      },
      {
        label: (
          <Flex gap="1rem">
            {" "}
            <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/invoicing.svg" />
            Invoicing
          </Flex>
        ),
        path: "/login",
      },
      {
        label: (
          <Flex gap="1rem">
            {" "}
            <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/billing-rates.svg" />
            Billing rates and budgeting
          </Flex>
        ),
        path: "#",
      },
      {
        label: (
          <Flex gap="1rem">
            {" "}
            <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/attendance-tracking.svg" />
            Attendance
          </Flex>
        ),
        path: "#",
      },
    ],
  },
  {
    label: "Pricing",
    path: "/pricing",
  },
  {
    label: (
      <Flex gap=".1rem" alignItems={"center"}>
        Integrations <FaAngleDown />
      </Flex>
    ),
    children: [
      {
        label: (
          <Flex gap="1rem">
            {" "}
            <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/Trello.svg" />
            Trello
          </Flex>
        ),
        path: "/login",
      },
      {
        label: (
          <Flex gap="1rem">
            {" "}
            <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/GCalendar.svg" />
            Google Calender
          </Flex>
        ),
        path: "/login",
      },
      {
        label: (
          <Flex gap="1rem">
            {" "}
            <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/iCal.svg" />
            iCal
          </Flex>
        ),
        path: "/login",
      },
      {
        label: (
          <Flex gap="1rem">
            {" "}
            <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/Asana.svg" />
            Asana
          </Flex>
        ),
        path: "/login",
      },
      {
        label: (
          <Flex gap="1rem">
            {" "}
            <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/Monday.svg" />
            Monday.com
          </Flex>
        ),
        path: "/login",
      },
      {
        label: (
          <Flex gap="1rem">
            {" "}
            <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/Jira.svg" />
            Jira
          </Flex>
        ),
        path: "/login",
      },
      {
        label: (
          <Flex gap="1rem">
            {" "}
            <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/all-integrations.svg" />
            All integrations
          </Flex>
        ),
        path: "/loginpage",
      },
    ],
  },

  {
    label: "Blog",
    path: "/blog",
  },
  {
    label: "Book a Demo",
    path: "/login",
  },
  {
    label: "Sign in",
    path: "/login",
  },
];
