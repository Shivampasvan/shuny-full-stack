import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser, updateUserDetails } from "../Redux/UserReducer/action";
import Navbart from "../Components/Navbart";

export default function AddUpdate() {
  const toast = useToast();
  const dispatch = useDispatch();
  const { updateuser, condition } = useSelector((store) => store.userReducer);
  const [name, setName] = useState(updateuser?.name || "");
  const [email, setEmail] = useState(updateuser?.email || "");
  const [phone, setPhone] = useState(updateuser?.phone || "");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = () => {
    if (name == "" || email == "" || phone == "") {
      toast({
        title: "Warning !!",
        description: "Please fill all details.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      const payload = {
        name,
        email,
        phone,
      };
      dispatch(addNewUser(payload));
      setName("");
      setEmail("");
      setPhone("");
      toast({
        title: "Added Successfully !!",
        description: "New user has been added.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleUpdate = () => {
    if (name == "" || email == "" || phone == "") {
      toast({
        title: "Error !!",
        description: "All credentials are required to be filled.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      const payload = {
        _id: updateuser._id,
        name,
        email,
        phone,
      };
      dispatch(updateUserDetails(payload));
      toast({
        title: "Updated Successfully !!",
        description: "User details have been updated.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Navbart />
      <Flex
        minH={"40vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={8} px={6}>
          <Stack align={"center"} color={"RGB(0 86 215)"}>
            {condition ? (
              <Heading fontSize={"4xl"} textAlign={"center"}>
                Create New User
              </Heading>
            ) : (
              <Heading fontSize={"4xl"} textAlign={"center"}>
                Update User Details
              </Heading>
            )}
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            // boxShadow={"lg"}
            p={50}
            display={"grid"}
            gap={3}
            border={"2px solid silver"}
            boxShadow={"RGB(110 110 255) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}
          >
            <FormControl id="Name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={handleName}
                name="name"
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={handleEmail}
                name="email"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Phone</FormLabel>
              <InputGroup>
                <Input
                  type="number"
                  value={phone}
                  onChange={handlePhone}
                  name="phone"
                />
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              {condition ? (
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"RGB(0 86 215)"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleSubmit}
                >
                  Create
                </Button>
              ) : (
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"RGB(0 86 215)"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleUpdate}
                >
                  Update
                </Button>
              )}
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
