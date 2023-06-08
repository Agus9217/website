import { HamburgerIcon } from "@chakra-ui/icons"
import { Box, Container, Flex, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from "@chakra-ui/react"
import { BsCodeSlash } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import ThemeToggleButton from "../ToggleMode"

export const Navbar = () => {
  return (
    <Box as='header' w={'100%'} py={2} pos={'fixed'} backdropFilter={'blur(8px)'} zIndex={100}>
      <Container maxW={'container.md'} display={'flex'} alignItems={'center'} justifyContent={'center'} >
        <Stack direction={'row'} alignItems={'center'} justifyContent={{base: 'space-between', md: 'center'}} w={'100%'}>
          <Link>
            <Flex alignItems={'center'} mr={'24px'}>
              <BsCodeSlash fontSize={'1.5rem'} />
              <Text ml={2} fontWeight={'700'} fontFamily={'Ubuntu'}>
                Agustin Ibarrola
              </Text>
            </Flex>
          </Link>
          <Box as="nav" display={'flex'} alignItems={'center'}>
            <Stack direction={'row'} display={{base: 'none', md: 'flex'}} spacing={'24px'}>
              <Link>Proyectos</Link>
              <Link>Bio</Link>
              <Link>Contacto</Link>
              <Link>
                <Flex alignItems={'center'} gap={1}>
                  <AiFillGithub /> GitHub
                </Flex>
              </Link>
            </Stack>
            <Flex w={{base: '100%', md: '150px'}} justifyContent={'flex-end'} mr={1}>
              <ThemeToggleButton />
            </Flex>
            <Menu>
              <MenuButton as={IconButton} icon={<HamburgerIcon />} display={{ base: 'block', md: 'none' }} variant={'outline'} />
              <MenuList>
                <MenuItem>Proyectos</MenuItem>
                <MenuItem>Bio</MenuItem>
                <MenuItem>Contacto</MenuItem>
                <MenuItem>GitHub</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
