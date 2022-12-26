import { Box, Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { FaApple, FaGoogle } from 'react-icons/fa'

export default function Login() {
  return (
    <Flex align="center" justify="center" h={"100vh"}>

      {/* Login Form */}
      <Flex align={"center"} justify={"center"} direction="column" width={"xs"}>
        <Heading color={"green.400"} mb={3} fontWeight="light">Sign In</Heading>

        <FormControl>
          <Input type='email' name='email' placeholder='Your Email Address' />
          <FormErrorMessage>Email is required.</FormErrorMessage>
        </FormControl>

        <FormControl mt={2}>
          <Input type='password' name='password' placeholder='Your password...' />
        </FormControl>

        <Button variant={'outline'} my={3} width={"full"} colorScheme="green">Sign In</Button>

        <Flex width={"full"} align={"center"}>
          <Box h={"1px"} width={"50%"} bgColor={"orange.500"} />
          <Text mx={2} color={"orange.500"}>OR</Text>
          <Box h={"1px"} width={"50%"} bgColor={"orange.500"} />
        </Flex>

        <Button leftIcon={<FaGoogle />} variant={'outline'} my={3} width={"full"} colorScheme="blackAlpha">Sign In with Google</Button>
        <Button leftIcon={<FaApple />} variant={'outline'} my={3} width={"full"} colorScheme="blackAlpha">Sign In with Apple</Button>
      </Flex>

    </Flex>
  )
}
