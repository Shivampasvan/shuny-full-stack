import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  editUserDetails,
  getUsers,
  viewUserDetails,
} from "../Redux/UserReducer/action";
import { Button, Text, Box, useToast } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

const UsersList = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, users } = useSelector(
    (store) => store.userReducer
  );

  useEffect(() => {
    dispatch(getUsers);
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
    toast({
      title: "Deleted Successfully !!",
      description: "User details have been deleted successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleUpdate = (el) => {
    dispatch(editUserDetails(el));
    navigate("/addorupdate");
  };

  const handleView = (el) => {
    dispatch(viewUserDetails(el));
    navigate("/userdetails");
  };

  return (
    <>
      <Navbar />
      <div>
        {users.map((el, i) => {
          return (
            <div
              style={{
                // border: "2px solid silver",
                borderRadius: "10px",
                width: "80%",
                margin: "25px auto",
                padding: "17px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: "center",
                fontWeight: "600",
                fontSize: "20px",
                boxShadow: "RGB(110 110 255) 0px 5px 15px",
              }}
              key={i}
            >
              <Box>
                <Text>Id - {el._id}</Text>
              </Box>
              <Box>
                <Text>Name - {el.name}</Text>
              </Box>

              <div style={{ display: "flex", gap: "25px" }}>
                <Button
                  boxShadow="RGB(110 110 255) 0px 5px 15px"
                  padding={"0px 25px"}
                  color={"white"}
                  bg={"RGB(57 114 205)"}
                  _hover={{
                    bg: "blue.400",
                  }}
                  onClick={() => handleView(el)}
                >
                  View
                </Button>
                <Button
                  boxShadow="RGB(110 110 255) 0px 5px 15px"
                  padding={"0px 25px"}
                  color={"white"}
                  bg={"RGB(57 114 205)"}
                  _hover={{
                    bg: "blue.400",
                  }}
                  onClick={() => handleUpdate(el)}
                >
                  Edit
                </Button>
                <Button
                  boxShadow="RGB(110 110 255) 0px 5px 15px"
                  padding={"0px 20px"}
                  color={"white"}
                  bg={"RGB(57 114 205)"}
                  _hover={{
                    bg: "blue.400",
                  }}
                  onClick={() => handleDelete(el._id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UsersList;
