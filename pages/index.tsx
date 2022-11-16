import { Box, Button, chakra, Fade, Flex, Heading, HStack, Icon, Image, Link, ListItem, shouldForwardProp, Slide, Stack, Text, UnorderedList, VStack } from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'
import type { NextPage } from 'next'
import CallToAction from '../components/CallToAction'
import Checklist from '../components/Checklist'
import NewsletterBox from '../components/NewsletterBox'

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Home: NextPage = () => {

  return (
    <Box>
      <VStack>
        <Flex maxW={"800px"} flexDir={"column"} alignItems={'center'} textAlign={'center'} pt="16" px='4'>
          <Stack direction={['column', 'row']} justify={'center'} color="gray.700">
            <Heading lineHeight='1.2' fontSize={['7xl', '5xl']} fontWeight={'extrabold'}>Collect.</Heading>
            <Heading lineHeight='1.2' fontSize={['7xl', '5xl']} bgGradient='linear(to-l, orange.500, green.400)' bgClip='text' fontWeight={'extrabold'}>Manage.</Heading>
            <Heading lineHeight='1.2' fontSize={['7xl', '5xl']} fontWeight={'extrabold'}>Share.</Heading>
          </Stack>
          {/* <Heading color="green.400">Collecting, Managing and Sharing reviews from your clients has been made easier with Reviewgush</Heading> */}
          <Text mt={2} color="gray.500" fontSize={'xl'} fontWeight="light">
            Reviews from satisfied clients/customers can now be collected easily with ReviewGush using video, images, text, ratings, or even a combination of all four formats.
          </Text>
          <Button as='a' mt={6} rounded={'xl'} minH={12} minW={32} bg="orange.500" color='white' _hover={{ bg: 'orange.600' }} href="#get-started">Start Here</Button>
        </Flex>
        <Image src='/images/developer.svg' alt='Dan Abramov' width={"600px"} />
      </VStack>

      <Stack direction={['column', 'row']} px={[8, 20]} py='8' spacing='6' bgColor='white'>
        <ChakraBox transition={{ duration: 0.5 }} initial={{ translateX: -600, opacity: 0 }} whileInView={{ translateX: 0, opacity: 1 }} width={['100%', '60%']}>
          <Heading fontSize='sm' color='orange.500' textTransform='uppercase' fontWeight='medium'>Collect</Heading>
          <Heading lineHeight='1' color='grey.700' fontSize='5xl' mb='2'>Get feedbacks easily</Heading>
          <Text color='gray.500'>Obtain feedback easily from your satisfied customers/clients about what they like best about your products/services. You can build your collection form in less than a minute.</Text>
          <UnorderedList color='gray.500' mb='8' mt='4'>
            <Checklist as='li'>Less than a minute set-up</Checklist>
            <Checklist as='li'>Collect Text, pictures and videos</Checklist>
            <Checklist as='li'>Easily embed on your website</Checklist>
          </UnorderedList>
          <Link href='#' color='green.400'>Learn More</Link>
        </ChakraBox>
        <ChakraBox transition={{ duration: 0.8 }} initial={{ translateX: -50, opacity: 0 }} whileInView={{ translateX: 0, opacity: 1 }} width={['100%', '40%']}>
          <Image src='/images/collect-1.svg' alt='Collect and Gather all your reviews in one place' />
        </ChakraBox>
      </Stack>

      <Stack direction={['column', 'row']} px={[8, 20]} py='8' spacing='6' bgColor='white'>
        <ChakraBox transition={{ duration: 0.8 }} initial={{ translateX: -50, opacity: 0 }} whileInView={{ translateX: 0, opacity: 1 }}  width={['100%', '40%']}>
          <Image src='/images/organize.svg' alt='Manage and Organize reviews' />
        </ChakraBox>
        <ChakraBox transition={{ duration: 0.5 }} initial={{ translateX: -600, opacity: 0 }} whileInView={{ translateX: 0, opacity: 1 }} width={['100%', '60%']}>
          <Heading fontSize='sm' color='orange.500' textTransform='uppercase' fontWeight='medium'>Manage</Heading>
          <Heading lineHeight='1'  color='grey.700' fontSize='5xl' mb='2'>Manage reviews and integrations</Heading>
          <Text color='gray.500'>You don{'\''}t have to open an Excel sheet to gather your feedback. ReviewGush gives you a powerful dashboard to manage all your reviews across all platforms.</Text>
          <UnorderedList color='gray.500' mb='8'>
            <Checklist as='li'>You can easily import testimonials from social media and review sites</Checklist>
            <Checklist as='li'>You can download reviews and export them in different formats</Checklist>
          </UnorderedList>
          <Link href='#' color='green.400'>Learn More</Link>
        </ChakraBox>
      </Stack>

      <Stack direction={['column', 'row']} px={[8, 20]} py='8' spacing='6' bgColor='white'>
        <ChakraBox transition={{ duration: 0.5 }} initial={{ translateX: -600, opacity: 0 }} whileInView={{ translateX: 0, opacity: 1 }} width={['100%', '60%']}>
          <Heading fontSize='sm' color='orange.500' textTransform='uppercase' fontWeight='medium'>Share</Heading>
          <Heading lineHeight='1' color='grey.700' fontSize='5xl' mb='2'>Share and Display your reviews</Heading>
          <Text color='gray.500'>Rather than sending WhatsApp screenshots of customers{'\''}/clients{'\''} reviews, share the reviews in a more organized format. With ReviewGush, you can share your collected reviews in a variety of formats, including designs.</Text>
          <UnorderedList color='gray.500' mb='8'>
            <Checklist as='li'>Easily shareable in various formats, including pictures</Checklist>
            <Checklist as='li'>Curate reviews from all your social media platforms into a wall of love to increase conversions</Checklist>
          </UnorderedList>
          <Link href='#' color='green.400'>Learn More</Link>
        </ChakraBox>
        <ChakraBox transition={{ duration: 0.8 }} initial={{ translateX: -50, opacity: 0 }} whileInView={{ translateX: 0, opacity: 1 }}  width={['100%', '40%']}>
          <Image src='/images/share-online.svg' alt='Share reviews online' />
        </ChakraBox>
      </Stack>

      <Flex padding={[0, 20]} justify='center'>
        <NewsletterBox id='get-started' rounded={['none', '2xl']} />
      </Flex>

    </Box>
  )
}

export default Home
