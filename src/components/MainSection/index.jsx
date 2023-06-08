import { Box, Container, Text, useColorModeValue } from '@chakra-ui/react'
import { Work } from '../Work'
import { Profile } from '../Profile'

export const Main = () => {
  const bg = useColorModeValue('teal.200', 'gray.700')

  return (
    <Container pos={'relative'} top={'70px'} >
      <Box background={bg} p={2} borderRadius={6}>
        <Text align={'center'}>
          Hola, soy programador web fullstack 
        </Text>
      </Box>
      <Profile />
      <Work />
    </Container>
  )
}
