import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../Redux/UserReducer/action";
import { Button, Text, Box } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";

const UsersList = () => {
  const dispatch = useDispatch();

  const { isLoading, isError, users } = useSelector(
    (store) => store.userReducer
  );
  console.log("yrd", users, isLoading, isError);

  useEffect(() => {
    dispatch(getUsers);
  }, []);

  return (
    <>
      <Navbar />

      {users.map((el, i) => {
        return (
          <div
            style={{
              border: "2px solid silver",
              borderRadius: "10px",
              width: "80%",
              margin: "auto",
              margin: "20px auto",
              padding: "10px",
              //   display: "flex",
              justifyContent: "space-between",
              //   alignItems: "center",
              //   textAlign: "center",
              fontWeight: "600",
              fontSize: "20px",
            }}
            key={i}
          >
            <Box>
              <Text>Name - {el.name}</Text>
            </Box>
            <Box>
              <Text>Email - {el.email}</Text>
            </Box>

            <Box>
              <Text>Phone - {el.phone}</Text>
            </Box>
          </div>
        );
      })}
    </>
  );
};

export default UsersList;
