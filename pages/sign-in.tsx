import { Box, Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input, Link, Text, useToast } from '@chakra-ui/react'
import { Form, Formik, FormikHelpers } from 'formik'
import React, { useEffect } from 'react'
import { FaApple, FaGoogle } from 'react-icons/fa'
import NextLink from 'next/link'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase.config'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store'
import { logUserIn } from '../features/auth/auth'

interface LoginValues {
  email: string;
  password: string;
}

export default function Login() {

  const dispatch = useDispatch<AppDispatch>();
  const { user, status } = useSelector((state: RootState) => state.auth);
  const toast = useToast();

  const submitLogin = async (values: LoginValues, {resetForm} : FormikHelpers<LoginValues>) => {
    dispatch(logUserIn({ email: values.email, password: values.password }))
      .unwrap()
      .then((response) => {
        console.log("Login Dispatch Call response: ", response);
        toast({
          title: "Login Successful",
          description: `You are logged in.`,
          status: "success",
        })
        
        resetForm();
      })
      .catch((error) => {
        toast({
          title: "Login Error",
          description: `${error.message}`,
          status: "error",
        })
      })
  }

  useEffect(() => {
    
  })

  return (
    <Flex align="center" justify="center" h={"100vh"}>

      {/* Login Form */}
      <Flex align={"center"} justify={"center"} direction="column" width={"xs"}>
        <Heading color={"green.400"} mb={3} fontWeight="light">Sign In</Heading>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={submitLogin}
        >
          {({ handleChange, handleBlur, values }) => (
            <Form style={{ width: "100%" }}>
              <FormControl>
                <Input type='email' name='email' placeholder='Your Email Address' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                <FormErrorMessage>Email is required.</FormErrorMessage>
              </FormControl>

              <FormControl mt={2}>
                <Input type='password' name='password' placeholder='Your password...' value={values.password} onChange={handleChange} onBlur={handleBlur} />
              </FormControl>

              <Button isLoading={status === "loading"} disabled={status == "loading"} type="submit" variant={'outline'} my={3} width={"full"} colorScheme="green">Sign In</Button>
            </Form>
          )}
        </Formik>

        <Link _hover={{ cursor: 'pointer' }} as={NextLink} href={"/sign-up"}><Text>Don{"'"}t have an account? Sign Up</Text></Link>

        <Flex width={"full"} align={"center"} my="4">
          <Box h={"1px"} width={"50%"} bgColor={"orange.500"} />
          <Text mx={2} color={"orange.500"}>OR</Text>
          <Box h={"1px"} width={"50%"} bgColor={"orange.500"} />
        </Flex>

        <Button leftIcon={<FaGoogle />} variant={'outline'} my={3} width={"full"} colorScheme="blue">Sign In with Google</Button>
        <Button leftIcon={<FaApple />} variant={'outline'} my={3} width={"full"} colorScheme="blackAlpha">Sign In with Apple</Button>
      </Flex>

    </Flex>
  )
}
