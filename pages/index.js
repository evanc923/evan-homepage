import NextLink from 'next/link'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import Image from 'next/image'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { Link, Box, Container, Heading, Button, useColorModeValue } from '@chakra-ui/react'

const Page = () => {
  return (
      <Container>
        <Box
          borderRadius="lg"
          mt={6}
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          Hello, I'm a full-stack developer based in Macao.
        </Box>

        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Evan Chan
          </Heading>
          <p>Developer / Photographer</p>
        </Box>

        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/evan-1.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            With over six years of experience as a full-stack developer at a NAS company in Taiwan, I thrive on building efficient programs and tackling problems with a creative approach. I believe in finding elegant solutions through clean code. When I'm not immersed in development, you'll find me exploring my passion for music as a guitarist or capturing moments through my photography. I enjoy the balance between the technical precision of coding and the artistic freedom of my hobbies.
          </Paragraph>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              My portfolio
            </Button>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2018</BioYear>
            Completed my Bachelor in Computer Science at National Sun Yat-sen University (國立中山大學)
          </BioSection>
          <BioSection>
            <BioYear>2018 to 2025</BioYear>
            Worked at{' '}
            <Link
              as={NextLink}
              href="https://www.promise.com/tw/"
              passHref
              target="_blank"
            >
              PROMISE Technology(Taiwan)
            </Link>
          </BioSection>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Contacts
          </Heading>
          <BioSection>
          Email: evanc923@gmail.com
          </BioSection>
        </Section>
      </Container>
  )
}

export default Page
