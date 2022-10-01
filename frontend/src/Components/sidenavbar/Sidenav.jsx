import {
    Box,
    Button,
    Flex,
    Text,
} from "@chakra-ui/react";
import React from "react";
import styles from "./sidenav.module.css";
import { FiClock, FiUsers } from "react-icons/fi";
import { AiOutlineCheckSquare} from "react-icons/ai";
import { FaChartPie,FaFileInvoiceDollar} from "react-icons/fa";
import { VscFileSubmodule } from "react-icons/vsc";
import { BsTags } from "react-icons/bs";
import { BiBriefcase } from "react-icons/bi";
import Navbar from "../Project_Sections/Navbar"
import { Link, Outlet } from "react-router-dom";


const Sidenav = () => {
    return (
    <>
    <Navbar/>
        <Box
            width="240px"
            height="98vh"
            boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
            transition={".1s"}
            zIndex="1500"
            padding={0}
            marginTop="-60px"
        >         
            <Flex flexDirection="column">
                <Box className={styles.common_outer}>
                   <Link to="/"><img style={{height:"60px"}} src="https://cdn-m.timecamp.com/img/greenbranding/press/timecamp-pr-materials/svg/colorLogo.svg"/></Link> 

                </Box>
                <Box className={styles.common_outer}>
                    <Text className={styles.texxt}>Track</Text>
                    <Button
                        className={styles.inner_common_btn}
                        bg="none"
                        justifyContent={"flex-start"}
                        fontWeight={"400"}
                    >
                        <FiClock className={styles.common_btn} />
                        <Text >
                          <Link to="">Timesheet</Link>  
                        </Text>
                    </Button>
                </Box>
                <Box className={styles.common_outer}>
                    <Text className={styles.texxt}>Analyze</Text>

                    <Button
                        className={styles.inner_common_btn}
                        bg="none"
                        justifyContent={"flex-start"}
                        fontWeight={"400"}

                    >
                        <FaChartPie className={styles.common_btn} />
                        <Text

                        >
                            Report
                        </Text>

                    </Button>

                </Box>
                <Box className={styles.common_outer}>
                    <Text className={styles.texxt}>Manage</Text>
                    <Button
                        className={styles.inner_common_btn}
                        bg="none"
                        justifyContent={"flex-start"}
                        fontWeight={"400"}
                    >
                        <VscFileSubmodule className={styles.common_btn} />
                        <Text >
                            <Link to="/app/projects">Project</Link>
                        </Text>
                    </Button>
                    <Button
                        className={styles.inner_common_btn}
                        bg="none"
                        justifyContent={"flex-start"}
                        fontWeight={"400"}
                    >
                        <BsTags className={styles.common_btn} />
                        <Text >
                        <Link to="/app/tags"> Tags</Link>
                        </Text>
                    </Button>
                </Box>

                <Box className={styles.common_outer}>
                    <Text className={styles.texxt}>Team</Text>
                    <Button
                        className={styles.inner_common_btn}
                        bg="none"
                        justifyContent={"flex-start"}
                        fontWeight={"400"}
                    >
                        <FiUsers className={styles.common_btn} />
                        <Text >
                            Users
                        </Text>
                    </Button>
                    <Button
                        className={styles.inner_common_btn}
                        bg="none"
                        justifyContent={"flex-start"}
                        fontWeight={"400"}
                    >
                        <AiOutlineCheckSquare className={styles.common_btn} />
                        <Text >
                            Attandance
                        </Text>
                    </Button>
                </Box>

                <Box className={styles.common_outer}>
                    <Text className={styles.texxt}>CLIENTS</Text>
                    <Button
                        className={styles.inner_common_btn}
                        bg="none"
                        justifyContent={"flex-start"}
                        fontWeight={"400"}
                    >
                        <BiBriefcase className={styles.common_btn} />
                        <Text >
                            Clients
                        </Text>
                    </Button>
                    <Button
                        className={styles.inner_common_btn}
                        bg="none"
                        justifyContent={"flex-start"}
                        fontWeight={"400"}
                    >
                        <FaFileInvoiceDollar className={styles.common_btn} />
                        <Text>
                            Invoices
                        </Text>
                    </Button>
                </Box>
            </Flex>

            <Outlet/>

        </Box>
        </>
    );
};

export default Sidenav;