import { Box, Skeleton, Stack, Text } from "@chakra-ui/react"

export const Work = () => {
  return (
    <>
      <Text as={'h2'} decoration={'underline'}>
        Trabajos
      </Text>
      <Stack direction={{ base: 'column', md: 'row' }} wrap={'wrap'} justifyContent={'center'} alignItems={'center'}>
        <Box p={2} w={{base: 'full', md: '49%'}}><Skeleton borderRadius={8} h={'190px'} /></Box>
        <Box p={2} w={{base: 'full', md: '49%'}}><Skeleton borderRadius={8} h={'190px'} /></Box>
        <Box p={2} w={{base: 'full', md: '49%'}}><Skeleton borderRadius={8} h={'190px'} /></Box>
        <Box p={2} w={{base: 'full', md: '49%'}}><Skeleton borderRadius={8} h={'190px'} /></Box>
        <Box p={2} w={{base: 'full', md: '49%'}}><Skeleton borderRadius={8} h={'190px'} /></Box>
        <Box p={2} w={{base: 'full', md: '49%'}}><Skeleton borderRadius={8} h={'190px'} /></Box>
      </Stack>
    </>
  )
}
