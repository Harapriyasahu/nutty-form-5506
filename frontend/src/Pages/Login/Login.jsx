import { Flex } from "@chakra-ui/react";
import LeftSection from "./LeftSection";
import RightSectiion from "./RightSectiion";

const Login = () => {
  return (
    <Flex width={"80%"} justify="space-between" border={"1px"} m="auto" mt="5rem" >
      <LeftSection />
      <RightSectiion />
    </Flex>
  );
};

export default Login;
