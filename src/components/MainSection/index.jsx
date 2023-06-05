import { Box, Container, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react'
import { SiReact, SiMongodb, SiPostgresql, SiExpress, SiSpringboot } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { FaNodeJs } from 'react-icons/fa'
import perfilImg from '../../assets/img/perfil-img.jpeg'
import React from 'react'

export const Main = () => {
  const bg = useColorModeValue('teal.200', 'gray.700')
  const color = useColorModeValue('teal.500', 'gray.500')

  return (
    <Container pos={'relative'} top={'70px'} >
      <Box background={bg} p={2} borderRadius={6}>
        <Text align={'center'}>
          Hola, soy programador web fullstack 
        </Text>
      </Box>
      <Box p={5} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Box>
          <Heading fontFamily={'Ubuntu'}>
            Agustin Ibarrola
          </Heading>
          <Flex gap={3} py={3} fontSize={'1.5rem'} color={color}>
            <SiReact /> <FaNodeJs /> <SiMongodb /> <SiPostgresql /> <GrMysql /> <SiExpress /> <SiSpringboot />
          </Flex>
        </Box>
        <Box>
          <Image boxSize={'120px'} src={perfilImg} borderRadius={'full'} border={'3px solid white'} boxShadow={'dark-lg'} />
        </Box>
      </Box>
      
    </Container>
  )
}
