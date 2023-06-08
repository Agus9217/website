import { Box, Flex, Heading, Image, useColorModeValue } from "@chakra-ui/react"
import { FaNodeJs } from "react-icons/fa"
import { SiChakraui, SiExpress, SiMongodb, SiPostgresql, SiReact, SiSass, SiSpringboot } from "react-icons/si"
import perfilImg from '../../assets/img/perfil-img.jpeg'


export const Profile = () => {

  const color = useColorModeValue('teal', 'gray.500')

  return (
    <Box py={8} display={{base: 'column', md: 'flex'}} justifyContent={'space-between'} alignItems={'center'}>
      <Box>
        <Heading fontFamily={'Ubuntu'} textAlign={'center'}>
          Agustin Ibarrola
        </Heading>
        <Flex gap={3} py={3} fontSize={'1.5rem'} color={color} justifyContent={'center'}>
          <SiReact /> <FaNodeJs /> <SiMongodb /> <SiPostgresql /> <SiExpress /> <SiSpringboot /> <SiChakraui /> <SiSass />
        </Flex>
      </Box>
      <Box display={'flex'} justifyContent={'center'}>
        <Image boxSize={'120px'} src={perfilImg} borderRadius={'full'} border={'3px solid white'} boxShadow={'dark-lg'} />
      </Box>
    </Box>
  )
}
