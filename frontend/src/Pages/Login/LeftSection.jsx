import { Box, Heading, Show, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FiChrome } from "react-icons/fi";
import CompanyBox from "./CompanyBox";
import styles from "./Login.module.css";

const LeftSection = () => {
  return (
    <Box>
      <VStack
        spacing={"3"}
        align={{ base: "center", lg: "flex-start" }}
        size="2xl"
        mt={"4rem"}
        mb={{base:"5rem"}}
      >
        <Heading size="2xl">TimeCamp Plugin for</Heading>
        <Heading size="2xl">Google Chrome</Heading>
        <Text className={styles.subheading}>
          Track time without leaving Chrome in 70+ online apps.
        </Text>

        <Box
          className={styles.addchromebtn}
          _hover={{ backgroundColor: "#25cf60" }}
          backgroundColor="#25cf60"
          color="white"
        >
          <FiChrome className={styles.chromelogo} />
          <Text className={styles.btntext}>Add TimeCamp for Chrome</Text>
        </Box>
      </VStack>
      <Show above="lg">
        <CompanyBox />
      </Show>
    </Box>
  );
};

export default LeftSection;
