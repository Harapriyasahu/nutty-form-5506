import { Box,  Stack,  Text } from "@chakra-ui/react";
import React from "react";
import { FiChrome } from "react-icons/fi";

import styles from "./Login.module.css";

const LeftSection = () => {


  return (
    <Stack w="50%" border={"1px solid red"} align={"flex-start"}>
      <Text className={styles.leftheading}>
        TimeCamp Plugin for Google Chrome
      </Text>

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

  
    </Stack>
  );
};

export default LeftSection;
