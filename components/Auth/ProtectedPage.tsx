import { Skeleton, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

type RouteProp = {
  children: JSX.Element;
}

export default function ProtectedPage({ children } : RouteProp) {
  const router = useRouter();
  const { user, status } = useSelector((state: RootState) => state.auth);

  if (true) {
    return (
      <Stack>
        <Skeleton height='20px' />
        <Skeleton height='20px' />
        <Skeleton height='20px' />
      </Stack>
    )
  }

  if (!user) {
    router.push("/sign-in");
  }

  return (
    <>
      {children}
    </>
  )
}
