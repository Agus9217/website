import { Box } from '@chakra-ui/react'
import lootieImg from '../../assets/lootie-logo.json'
import React from 'react'
import { useLottie } from 'lottie-react'

export const Hero = () => {
  const opt = {
    animationData: lootieImg,
    loop: true,
  }

  const { View } = useLottie(opt)

  return (
    <Box w={'100%'} maxW={'500px'} h={'300px'} mx={'auto'} display={'flex'} alignItems={'center'} pos={'relative'} top={'90px'}>
      { View }
    </Box>
  )
}
