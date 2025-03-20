import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I'm a full-stack developer based in macau.
      </Box>
      <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
          Evan Chan
        </Heading>
        <p>Developer / Photographer</p>
      </Box>
    </Container>
  )
}

export default Page
