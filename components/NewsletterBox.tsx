import { Box, Button, Flex, Heading, HStack, Input, InputGroup, InputRightElement, StackProps, Text, useToast } from '@chakra-ui/react'
import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ThreeStrokes from './BackgroundPatterns/ThreeStrokes'

export default function NewsletterBox({ ...props }: StackProps) {
  const toast = useToast();
  const [emailAddress, setEmailAddress] = useState<string>();

  const handleSubscriptionRequest = async (data: { email: string }) => {

    const response = await fetch(`/api/get-notified`, {
      body: JSON.stringify({ email: emailAddress }),
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

  const { mutateAsync, mutate } = useMutation({
    mutationFn: handleSubscriptionRequest,
  });



  const subscribeToNewsletter = async (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (!emailAddress) {
      return toast({
        title: "Ooops!",
        description: "Invalid email address.",
        status: "error",
        isClosable: true,
        duration: 5000,
        position: 'top'
      });
    }

    try {
      await mutateAsync({ email: emailAddress });

      toast({
        title: "Email Subscribed",
        description: "You have suceesfully subscribed to our email list. Be sure to hear from us once the product launches.",
        status: "success",
        isClosable: true,
        duration: 5000,
        position: 'top'
      });
  
      setEmailAddress("");

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
      <Heading fontSize='12px' color='white' textTransform='uppercase'>Enjoy 30 days free trial</Heading>
      <Heading fontSize='4xl' color='white'>Sign Up Now</Heading>
      <Text color='white.600'>Be the first to receive the good news from us when we launch. For the first 100 signups, we are giving out 30 days free trial.</Text>
      <Flex as={'form'} onSubmit={subscribeToNewsletter} pos='relative' align='center' minWidth='300px' maxWidth='lg' marginTop='6'>
        <Input type={"email"} required value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} placeholder='Enter your email' outline='0' minHeight='12' pr='32' border='2px' borderColor='gray.300' _placeholder={{ color: 'gray.200' }} focusBorderColor='gray.300' />
        <Button type='submit' pos='absolute' right='1' bgColor='orange.500' _hover={{ bgColor: 'orange.600' }} zIndex="20">Sign Me Up</Button>
      </Flex>
      <ThreeStrokes pos='absolute' transform='rotate(45deg)' bottom='60%' left='85%' />
      <ThreeStrokes pos='absolute' transform='rotate(45deg)' top='60%' right='85%' />
    </Flex>
  )
}