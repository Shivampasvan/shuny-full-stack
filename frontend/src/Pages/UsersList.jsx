import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, editUserDetails, getUsers, updateUser, viewUserDetails } from "../Redux/UserReducer/action";
import { Button, Text, Box } from "@chakra-ui/react";
import axios from "axios";
import Navbar from "../Components/Navbar"
import { useNavigate } from "react-router-dom";

const UsersList = () => {
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
  };

  const handleUpdate = (el) => {
    dispatch(editUserDetails(el))
    navigate("/addorupdate")
  };

  const handleView = (el) => {
    dispatch(viewUserDetails(el))
    navigate("/userdetails")
  };

  return (
    <>
      <Navbar />
      <div>
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
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: "center",
                fontWeight: "600",
                fontSize: "20px",
              }}
              key={i}
            >
              <Box>
                <Text>Id - {el._id}</Text>
              </Box>
              <Box>
                <Text>Name - {el.name}</Text>
              </Box>

              <div style={{ display: "flex", gap: "20px" }}>
                <Button onClick={() => handleView(el)}>View</Button>
                <Button onClick={() => handleUpdate(el)}>Edit</Button>
                <Button onClick={() => handleDelete(el._id)}>Delete</Button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UsersList;
