import { CheckIcon } from "@chakra-ui/icons";
import { Box, HStack, StackProps, Text } from "@chakra-ui/react";

interface ChecklistProps extends StackProps {
  children: string;
}

export default function Checklist({ children, ...otherProps }: ChecklistProps) {
  return (
    <HStack {...otherProps}>
      <CheckIcon />
      <Text>{children}</Text>
    </HStack>
  )
}
