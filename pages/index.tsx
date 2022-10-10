import { Box, Button, Flex, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <VStack>
      <Flex maxW={"800px"} flexDir={"column"} alignItems={'center'} textAlign={'center'} py="16">
        <HStack justify={'center'} color="orange.500">
          <Heading fontSize="md" textTransform={"uppercase"}>Collect.</Heading>
          <Heading fontSize="md" textTransform={"uppercase"}>Manage.</Heading>
          <Heading fontSize="md" textTransform={"uppercase"}>Share.</Heading>
        </HStack>
        <Heading color="green.400">Collecting, Managing and Sharing reviews from your clients has been made easier with Reviewgush</Heading>
        <Text mt={2} color="gray.500">
          Reviews from satisfied clients/customers can now be collected easily with ReviewGush using video, images, text, ratings, or even a combination of all four formats.
        </Text>
        <Button mt={6} rounded={'xl'} minH={12} minW={50} bg="orange.500" color='white' _hover={{ bg: 'orange.600' }}>Start Here</Button>
      </Flex>
      <Image src='/images/sample.png' alt='Dan Abramov' width={"800px"} dropShadow="lg" />
    </VStack>
  )
}

export default Home
