import React, { useState } from "react";
import { Box,  Input, Text, useToast } from "@chakra-ui/react";
import styles from "./Login.module.css";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginFailure, loginRequest, loginSuccess } from "../../Redux/auth/action";
import axios from "axios";
import { notify } from "../../utils/extraFunctions";


const RightSectiion = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginRequest());
    axios
      .post(`/login`, user)
      .then((res) => {
        console.log(res.data);
        if (res.data.token) {
          // console.log(res.data);
         
          dispatch(loginSuccess(res.data));
          notify(toast, res.data.message, "success", "bottom");
          navigate("/");
        }
      })
      .catch((err) =>{
        notify(toast, err.response.data.message, 'error');
        dispatch(loginFailure())
      } );
  };



  return (
    <Box w={{base:"90%", md:"70%",lg:"50%"}} m="auto" className={styles.logindiv}>
      <Text className={styles.loginheading}>Log in to TimeCamp</Text>

      <Box
        className={styles.googlebtn}
        _hover={{ backgroundColor: "gray.100" }}
      >
        <FcGoogle fontSize="30px" />
        <Text fontSize="14px" fontWeight="700" color="#8f7e77">
          Log in with Google
        </Text>
      </Box>

      <Text marginTop="20px" fontSize="14px">
        Or
      </Text>

      <Box margin="auto" width="75%" marginTop="20px">
        <Input type = "email" name="email" focusBorderColor="#25cf60" placeholder="email"   onChange={handleChange}/>
        <Input
          type="password"
          name="password"
          focusBorderColor="#25cf60"
          placeholder="password"
          marginTop="15px"
          onChange={handleChange}
        />
      </Box>

      <Link to="/forgotten_password">
        <Text color="#25cf60" marginTop="15px" fontSize="14px" cursor="pointer">
          Forgotten Password?
        </Text>
      </Link>

      <Text
        className={styles.loginbtn}
        backgroundColor="#25cf60"
        cursor="pointer"
        onClick={handleLogin}
      >
        Log in
      </Text>

      <Text
        color="gray"
        fontSize="14px"
        width="65%"
        margin="auto"
        marginTop="20px"
        textAlign="center"
      >
        <span
          onClick={() => navigate("/signup")}
          style={{ color: "#25cf60", cursor: "pointer" }}
        >
          No account? Sign up
        </span>{" "}
        or
        <span style={{ color: "#25cf60", cursor: "pointer" }}>
          {" "}
          Log in with SSO
        </span>
      </Text>
    </Box>
  );
};

export default RightSectiion;
