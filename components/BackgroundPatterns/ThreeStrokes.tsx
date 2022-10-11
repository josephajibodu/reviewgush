import { Box, HStack, StackProps } from "@chakra-ui/react";

interface ThreeStokesProps extends StackProps {
  
}

export default function ThreeStrokes({ ...props } : ThreeStokesProps) {
  return (
    <HStack spacing='4' {...props}>
      <Box width='12' height='250px' bgColor='whiteAlpha.400' rounded='full' />
      <Box width='12' height='350px' bgColor='whiteAlpha.400' rounded='full' />
      <Box width='12' height='300px' bgColor='whiteAlpha.400' rounded='full' />
    </HStack>
  )
}
