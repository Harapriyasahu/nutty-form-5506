import React, { useState } from "react";
import "./Timesheet.css";
import { Menu, MenuButton, MenuList, MenuItem, Box, Flex } from "@chakra-ui/react";

import { CustomCalendar } from "./CustomCalendar";

const Timesheet = () => {

  return (
    <div className="timesheetmain">
    <Flex>
<CustomCalendar />
   
    </Flex>
    </div>
  );
};

export default Timesheet;
