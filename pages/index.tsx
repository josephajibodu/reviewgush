import { Box, Button, Flex, Heading, HStack, Icon, Image, Link, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Checklist from '../components/Checklist'

const Home: NextPage = () => {
  return (
    <Box>
      <VStack>
        <Flex maxW={"800px"} flexDir={"column"} alignItems={'center'} textAlign={'center'} pt="16">
          <HStack justify={'center'} color="gray.700">
            <Heading fontSize="5xl" fontWeight={'extrabold'}>Collect.</Heading>
            <Heading fontSize="5xl" color="orange.500" fontWeight={'extrabold'}>Manage.</Heading>
            <Heading fontSize="5xl" fontWeight={'extrabold'}>Share.</Heading>
          </HStack>
          {/* <Heading color="green.400">Collecting, Managing and Sharing reviews from your clients has been made easier with Reviewgush</Heading> */}
          <Text mt={2} color="gray.500" fontSize={'xl'} fontWeight="light">
            Reviews from satisfied clients/customers can now be collected easily with ReviewGush using video, images, text, ratings, or even a combination of all four formats.
          </Text>
          <Button mt={6} rounded={'xl'} minH={12} minW={50} bg="orange.500" color='white' _hover={{ bg: 'orange.600' }}>Start Here</Button>
        </Flex>
        <Image src='/images/developer.svg' alt='Dan Abramov' width={"600px"} />
      </VStack>

      <HStack px='20' py='8' spacing='6' bgColor='white'>
        <Box>
          <Heading fontSize='sm' color='orange.500' textTransform='uppercase' fontWeight='medium'>Collect</Heading>
          <Heading color='grey.700' fontSize='5xl' mb='2'>Get feedbacks easily</Heading>
          <Text color='gray.500'>Obtain feedback easily from your satisfied customers/clients about what they like best about your products/services. You can build your collection form in less than a minute.</Text>
          <UnorderedList color='gray.500' mb='8'>
            <Checklist as='li'>Less than a minute set-up</Checklist>
            <Checklist as='li'>Collect Text, pictures and videos</Checklist>
            <Checklist as='li'>Easily embed on your website</Checklist>
          </UnorderedList>
          <Link href='#' color='green.400'>Learn More</Link>
        </Box>
        <Box>
          <Image src='/images/meeting-feature-1.png' alt='Feature 1' />
        </Box>
      </HStack>

      <HStack px='20' py='8' spacing='6' bgColor='white'>
        <Box>
          <Image src='/images/meeting-feature-2.png' alt='Feature 2' />
        </Box>
        <Box>
          <Heading fontSize='sm' color='orange.500' textTransform='uppercase' fontWeight='medium'>Manage</Heading>
          <Heading color='grey.700' fontSize='5xl' mb='2'>Manage reviews and integrations</Heading>
          <Text color='gray.500'>You don{'\''}t have to open an Excel sheet to gather your feedback. ReviewGush gives you a powerful dashboard to manage all your reviews across all platforms.</Text>
          <UnorderedList color='gray.500' mb='8'>
            <Checklist as='li'>You can easily import testimonials from social media and review sites</Checklist>
            <Checklist as='li'>You can download reviews and export them in different formats</Checklist>
          </UnorderedList>
          <Link href='#' color='green.400'>Learn More</Link>
        </Box>
      </HStack>

      <HStack px='20' py='8' spacing='6' bgColor='white'>
        <Box>
          <Heading fontSize='sm' color='orange.500' textTransform='uppercase' fontWeight='medium'>Share</Heading>
          <Heading color='grey.700' fontSize='5xl' mb='2'>Share and Display your reviews</Heading>
          <Text color='gray.500'>Rather than sending WhatsApp screenshots of customers{'\''}/clients{'\''} reviews, share the reviews in a more organized format. With ReviewGush, you can share your collected reviews in a variety of formats, including designs.</Text>
          <UnorderedList color='gray.500' mb='8'>
            <Checklist as='li'>Easily shareable in various formats, including pictures</Checklist>
            <Checklist as='li'>Curate reviews from all your social media platforms into a wall of love to increase conversions</Checklist>
          </UnorderedList>
          <Link href='#' color='green.400'>Learn More</Link>
        </Box>
        <Box>
          <Image src='/images/meeting-feature-2.png' alt='Feature 2' />
        </Box>
      </HStack>

      <Box padding='20'>
        <Flex bgColor='orange.500' padding='8' rounded='2xl' color='white'>
          <VStack align='start'>
            <Text>Get 30-day free trial</Text>
            <Heading>Enjoy the benefit of trusting us first</Heading>
          </VStack>
          <Flex flexDir='column' flexGrow={1}>
            <HStack justify='end'>
              <Button minWidth='30' bgColor='orange.300' _hover={{ bgColor: 'orange.400' }}>Get Started</Button>
              <Button minWidth='30' bgColor='white' color='gray.700' _hover={{ bgColor: 'white' }}>Let{'\''}s Talk</Button>
            </HStack>
            <HStack justify='end' mt='2'>
              <Checklist as='li'>All Pro Features</Checklist>
              <Checklist as='li'>30 days </Checklist>
            </HStack>
          </Flex>
        </Flex>
      </Box>

    </Box>
  )
}

export default Home
