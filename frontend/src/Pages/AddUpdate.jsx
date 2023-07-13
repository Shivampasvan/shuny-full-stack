import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { addNewUser, updateUserDetails } from '../Redux/UserReducer/action';
import Navbart from '../Components/Navbart';

export default function AddUpdate() {
  const dispatch = useDispatch()
  const { updateuser, condition } = useSelector(
    (store) => store.userReducer
  );
  console.log("user", updateuser, condition);
  const [name, setName] = useState(updateuser?.name || "")
  const [email, setEmail] = useState(updateuser?.email || "")
  const [phone, setPhone] = useState(updateuser?.phone || "")

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePhone = (e) => {
    setPhone(e.target.value)
  }

  const handleSubmit = () => {
    const payload = {
      name, email, phone
    }
    dispatch(addNewUser(payload))
  }

  const handleUpdate = () => {
    const payload = {
      _id: updateuser._id,
      name, email, phone
    }
    dispatch(updateUserDetails(payload))
  }

  return (<>
    <Navbart />
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          {condition ?
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Create User
            </Heading>
            :
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Update User Details
            </Heading>}
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <FormControl id="Name" isRequired>
            <FormLabel> Name</FormLabel>
            <Input type="text" value={name} onChange={handleName} name="name" />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} onChange={handleEmail} name="email" />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Phone</FormLabel>
            <InputGroup>
              <Input type='number' value={phone} onChange={handlePhone} name="phone" />
            </InputGroup>
          </FormControl>
          <Stack spacing={10} pt={2}>

            {condition ?
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleSubmit}
              >
                Create
              </Button> :
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleUpdate}
              >
                Update
              </Button>
            }

          </Stack>
        </Box>
      </Stack >
    </Flex >
  </>
  );
}
