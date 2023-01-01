import { Box, Button, CircularProgress, Flex, Heading, HStack, Input, InputGroup, InputRightElement, StackProps, Text, useToast } from '@chakra-ui/react'
import { useMutation, useQuery } from '@tanstack/react-query';
import { Form, Formik, FormikHelpers } from 'formik';
import React, { useState } from 'react';
import ThreeStrokes from './BackgroundPatterns/ThreeStrokes'

type WaitlistValue = {
  email: string;
  firstname: string;
  lastname: string;
}

const initialValue: WaitlistValue = { email: "", firstname: "", lastname: "" };

export default function NewsletterBox({ ...props }: StackProps) {
  const toast = useToast();
  const [emailAddress, setEmailAddress] = useState<string>();
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();

  const handleSubscriptionRequest = async (data: { email: string, firstname: string, lastname: string }) => {
    const { email, firstname, lastname } = data;
    const response = await fetch(`/api/get-notified`, {
      body: JSON.stringify({ email, firstname, lastname }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  }

  const { mutateAsync, mutate, isLoading } = useMutation({
    mutationFn: handleSubscriptionRequest,
  });

  const subscribeToNewsletter = async (values: WaitlistValue, { resetForm }: FormikHelpers<WaitlistValue>) => {
    const { email, firstname, lastname } = values;

    try {
      await mutateAsync({ email, firstname, lastname });

      toast({
        title: "Email Subscribed",
        description: "You have suceesfully subscribed to our email list. Be sure to hear from us once the product launches.",
        status: "success",
        isClosable: true,
        duration: 5000,
        position: 'top'
      });

      resetForm();

    } catch (error) {
      console.log(error);

      toast({
        title: "Email Subscription Error",
        description: "An unknow error occured",
        status: "error",
        isClosable: true,
        duration: 5000,
        position: 'top'
      });
    }


  }

  return (
    <Flex overflow='hidden' pos='relative' flexDir='column' align='center' maxWidth='3xl' paddingX='14' paddingY='20' color='white' rounded='2xl' textAlign='center' bgColor='green.500' {...props}>
      <Heading fontSize='12px' color='white' textTransform='uppercase'>Enjoy 30 days free pro trial </Heading>
      <Heading fontSize='4xl' color='white' mb={"4"}>Join Our Waitlist</Heading>
      <Text color='white.600'>Be the first to receive the good news from us when we launch. For the first 100 signups, we are giving out 30 days free trial for our pro subscriptions.</Text>
      <Formik initialValues={initialValue} onSubmit={subscribeToNewsletter}>
        {({ handleChange, values, errors, submitForm }) => (
          <Form>
            <Flex direction={["column", "row"]} pos='relative' align='center' marginTop='6' >
              <Text>{errors.email}</Text>
              <Text>{errors.firstname}</Text>
              <Text>{errors.lastname}</Text>
              <Input type={"text"} name="firstname" required value={values.firstname} onChange={handleChange} mr={["0", "4"]} placeholder='First Name' outline='0' minHeight='12' border='2px' borderColor='gray.300' _placeholder={{ color: 'gray.200' }} focusBorderColor='gray.300' />
              <Input type={"text"} name="lastname" required value={values.lastname} onChange={handleChange} mr={["0", "4"]} placeholder='Last Name' outline='0' minHeight='12' border='2px' borderColor='gray.300' _placeholder={{ color: 'gray.200' }} focusBorderColor='gray.300' />
              <Flex minWidth='300px' maxWidth='lg' align='center'>
                <Input type={"email"} name="email" required value={values.email} onChange={handleChange} placeholder='Enter your email' outline='0' minHeight='12' pr='32' border='2px' borderColor='gray.300' _placeholder={{ color: 'gray.200' }} focusBorderColor='gray.300' />
                <Button isLoading={isLoading} type="submit" pos='absolute' right='1' bgColor='orange.500' _hover={{ bgColor: 'orange.600' }} zIndex="20">Join Waitlist</Button>
              </Flex>
            </Flex>
          </Form>
        )}
      </Formik>
      <ThreeStrokes pos='absolute' transform='rotate(45deg)' bottom='60%' left='85%' />
      <ThreeStrokes pos='absolute' transform='rotate(45deg)' top='60%' right='85%' />
    </Flex>
  )
}