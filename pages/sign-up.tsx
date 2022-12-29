import { Box, Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input, Link, Text, useToast } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import NextLink from 'next/link'
import React, { useEffect } from 'react'
import { FaApple, FaGoogle } from 'react-icons/fa'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config/firebase.config'
import { registerUser, updateUserProfile } from '../features/auth/auth'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store'

interface RegistrationValues {
  firstname: string, lastname: string, email: string, phonenumber: string, password: string, password_confirmation: string
}

export default function Register() {

  const dispatch = useDispatch<AppDispatch>();
  const { status, user } = useSelector((state: RootState) => state.auth);
  const toast = useToast();

  const handleRegistration = async (values : RegistrationValues) => {
    dispatch(registerUser({ 
      email: values.email,
      firstName: values.firstname,
      lastName: values.lastname,
      password: values.password,
      phoneNumber: values.phonenumber
     }))
      .unwrap()
      .then((response) => {
        console.log("Register Dispatch Call response: ", response);
        toast({
          title: "Account Registration",
          description: `Registration successful.`,
          status: "success",
        })

        createAccount(values);
      })
      .catch((error) => [
        toast({
          title: "Account Registration",
          description: `${error.message}`,
          status: "error",
        })
      ])
  }

  const createAccount = (values: RegistrationValues) => {
    dispatch(updateUserProfile({
      email: values.email,
      firstName: values.firstname,
      lastName: values.lastname,
      phoneNumber: values.phonenumber,
      password: values.password
    })).unwrap()
    .then((response) => {
      console.log("User profile updated");
    })
    .catch((error) => {
      console.log("Failure updating users profile.")
    })
  }

  return (
    <Flex align="center" justify="center" h={"100vh"}>

      {/* Login Form */}
      <Flex align={"center"} justify={"center"} direction="column" width={"xs"}>
        <Heading color={"green.400"} mb={3} fontWeight="light">Sign Up</Heading>

        <Formik
          initialValues={{ firstname: "", lastname: "", email: "", phonenumber: "", password: "", password_confirmation: "" }}
          onSubmit={handleRegistration}
        >
          {({ handleChange, handleBlur, values }) => (
            <Form style={{ width: "100%" }}>
              <FormControl mt={2}>
                <Input type='text' name='firstname' placeholder='First Name' value={values.firstname} onChange={handleChange} onBlur={handleBlur} />
              </FormControl>

              <FormControl mt={2}>
                <Input type='text' name='lastname' placeholder='Last Name' value={values.lastname} onChange={handleChange} onBlur={handleBlur} />
              </FormControl>

              <FormControl mt={2}>
                <Input type='email' name='email' placeholder='Your Email Address' value={values.email} onChange={handleChange} onBlur={handleBlur} />
              </FormControl>

              <FormControl mt={2}>
                <Input type='text' name='phonenumber' placeholder='Phone Number' value={values.phonenumber} onChange={handleChange} onBlur={handleBlur} />
              </FormControl>

              <FormControl mt={2}>
                <Input type='password' name='password' placeholder='Your password...' value={values.password} onChange={handleChange} onBlur={handleBlur} />
              </FormControl>

              <FormControl mt={2}>
                <Input type='password' name='password_confirmation' placeholder='Confirm Password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
              </FormControl>

              <Button isLoading={status === "loading"} disabled={status == "loading"} type="submit" variant={'outline'} my={3} width={"full"} colorScheme="green">Sign Up</Button>
            </Form>
          )}
        </Formik>

        <Link _hover={{ cursor: 'pointer' }} as={NextLink} href={"/sign-in"}><Text>I have an account. Sign In Now</Text></Link>

        <Flex width={"full"} align={"center"} my="4">
          <Box h={"1px"} width={"50%"} bgColor={"orange.500"} />
          <Text mx={2} color={"orange.500"}>OR</Text>
          <Box h={"1px"} width={"50%"} bgColor={"orange.500"} />
        </Flex>

        <Button leftIcon={<FaGoogle />} variant={'outline'} my={3} width={"full"} colorScheme="blue">Sign Up with Google</Button>
        <Button leftIcon={<FaApple />} variant={'outline'} my={3} width={"full"} colorScheme="blackAlpha">Sign Up with Apple</Button>
      </Flex>

    </Flex>
  )
}
