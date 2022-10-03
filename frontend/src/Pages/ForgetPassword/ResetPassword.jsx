import {
  Box,
  Button,
  Divider,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { notify } from "../../utils/extraFunctions";

const ResetPassword = () => {
  const navigate = useNavigate();
  const {id, token} = useParams();
  const toast = useToast();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password && confirmPassword) {
      const payload = { password, confirmPassword };

      axios
        .post(`/reset-password/${id}/${token}`, payload)
        .then((res) => {
          console.log(res.data.message);
          if (res.data.message) {
            notify(toast, res.data.message, "success","bottom");
            navigate("/login");
          }
        })
        .catch((err) => {
          console.log(err);
          notify(toast, err.response.data.message, "error","bottom");
        });
    }
  };

  return (
    <Box>
      <Image
        w="140px"
        h="40px"
        marginLeft="30%"
        marginTop="80px"
        src="https://cdn.timecamp.com/res/css/images/greenbranding/TC-logo.1661423136.svg"
        alt="timecampLogo"
      />

      <Box
        width="41%"
        boxShadow="lg"
        marginTop="10px"
        marginLeft="30%"
        border="1px solid silver"
        borderRadius="10px"
        paddingLeft="2%"
        paddingBottom="20px"
      >
        <Text fontWeight="700" fontSize="18px" marginTop="30px">
          Reset Password
        </Text>

        <Divider width="96%" marginTop="20px" />

        <Box display="flex" alignItems="center" marginTop="25px" gap="7%">
          <Text width={"32"}>New Password</Text>
          <Input
            type="password"
            focusBorderColor="#25cf60"
            width="60%"
            color="black"
            backgroundColor="#f8f8f8"
            fontSize="14px"
            height="35px"
            placeholder="Enter your New Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Box display="flex" alignItems="center" marginTop="25px" gap="7%">
          <Text width={"32"}>Confirm Password</Text>
          <Input
            type="password"
            focusBorderColor="#25cf60"
            width="60%"
            color="black"
            backgroundColor="#f8f8f8"
            fontSize="14px"
            height="35px"
            placeholder="confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Box>
        <Button
          fontSize="14px"
          marginTop="15px"
          ml={"-10"}
          color="white"
          bg="#4bb063"
          padding="5px 35px 5px 35px"
          onClick={handlePasswordSubmit}
        >
          Save Settings
        </Button>

        <Divider width="96%" marginTop="40px" />

        <Link to="/login">
          <Text fontWeight="500" fontSize="14px" color="blue" marginTop="20px">
            Return to Login
          </Text>
        </Link>
      </Box>
    </Box>
  );
};

export default ResetPassword;
