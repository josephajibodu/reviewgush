import { Box, Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input, Text } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import React from 'react'
import { FaApple, FaGoogle } from 'react-icons/fa'

export default function Register() {
  return (
    <Flex align="center" justify="center" h={"100vh"}>

      {/* Login Form */}
      <Flex align={"center"} justify={"center"} direction="column" width={"xs"}>
        <Heading color={"green.400"} mb={3} fontWeight="light">Sign Up</Heading>

        <Formik
          initialValues={{ firstname: "", lastname: "", email: "", phonenumber: "", password: "", password_confirmation: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({handleChange, handleBlur, values}) => (
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

              <Button type="submit" variant={'outline'} my={3} width={"full"} colorScheme="green">Sign Up</Button>
            </Form>
          )}
        </Formik>

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
