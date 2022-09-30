import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const CompanyBox = () => {
  return (
    <Box w={"80%"} m="auto" my="4rem">
      <SimpleGrid
        placeItems={{ base: "center" }}
        ml={{ lg: "-5rem" }}
        spacing={"10"}
        columns={{ base: "2", lg: "5" }}
      >
        <Image
          w="110px"
          h="50px"
          src="https://cdn.timecamp.com/res/css/images/crozdesk-icon.1661509647.png"
          alt="logo"
        />

        <Image
          w="94px"
          h="50px"
          src="https://cdn.timecamp.com/res/css/images/capterra-icon.1661509647.png"
          alt="logo"
        />

        <Image
          w="94px"
          h="50px"
          src="https://cdn.timecamp.com/res/css/images/crowd-icon.1661509647.png"
          alt="logo"
        />

        <Image
          w="94px"
          h="50px"
          src="https://cdn.timecamp.com/res/css/images/get-app-icon.1661509647.png"
          alt="logo"
        />
      </SimpleGrid>
    </Box>
  );
};

export default CompanyBox;
