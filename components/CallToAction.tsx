import { Flex, VStack, Text, Heading, Button, HStack } from '@chakra-ui/react';
import Checklist from './Checklist';

export default function CallToAction() {
  return (
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
  )
}
