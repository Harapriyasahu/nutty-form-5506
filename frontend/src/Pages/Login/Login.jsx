import { Box, Flex,  } from "@chakra-ui/react";
import LeftSection from "./LeftSection";
import RightSectiion from "./RightSectiion";

const Login = () => {
  return (
    <Flex
      width={{base:"100%", md: "90%"}}
      direction={{base:"column", md:"row"}}
      display={{ lg: "flex" }}
      justify="space-between"
      alignItems={"flex-start"}
      m="auto"
   mt="70px"
     
    >
      <LeftSection />
      <RightSectiion />
    </Flex>
  );
};

export default Login;
