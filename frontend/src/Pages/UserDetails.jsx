import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../Redux/UserReducer/action";
import { Button, Text, Box } from "@chakra-ui/react";
import Navbart from "../Components/Navbart";

const UserDetails = () => {
  const dispatch = useDispatch();

  const { isLoading, isError, userdetails } = useSelector(
    (store) => store.userReducer
  );

  useEffect(() => {
    dispatch(getUsers);
  }, []);

  return (
    <>
      <Navbart />
      <div
        style={{
          border: "2px solid silver",
          borderRadius: "10px",
          width: "40%",
          margin: "60px auto",
          padding: "50px",
          justifyContent: "space-between",
          fontWeight: "600",
          fontSize: "20px",
          boxShadow:
            "RGB(110 110 255) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        }}
      >
        <Box>
          <Text>ID - {userdetails?._id}</Text>
        </Box>

        <Box>
          <Text>Name - {userdetails?.name}</Text>
        </Box>
        <Box>
          <Text>Email - {userdetails?.email}</Text>
        </Box>

        <Box>
          <Text>Phone - {userdetails?.phone}</Text>
        </Box>
      </div>
    </>
  );
};

export default UserDetails;
