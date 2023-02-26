import { Box } from '@chakra-ui/react'
import React from 'react'
import ProtectedPage from '../components/Auth/ProtectedPage'

export default function Dashboard() {
  return (
    <ProtectedPage>
      <Box minH={"100vh"}>
        Dashboard
      </Box>
    </ProtectedPage>
  )
}
