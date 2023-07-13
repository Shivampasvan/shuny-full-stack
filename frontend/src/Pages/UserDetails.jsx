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
          width: "80%",
          margin: "auto",
          margin: "20px auto",
          padding: "10px",
          justifyContent: "space-between",
          fontWeight: "600",
          fontSize: "20px",
        }}>
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
