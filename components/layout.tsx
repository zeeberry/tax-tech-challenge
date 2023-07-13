import Head from 'next/head'
import Link from 'next/link'
import { Container, Flex, Heading } from '@chakra-ui/react'

const name = 'My Resy'
export const siteTitle = 'Tax Tech Challenge'

export default function Layout({ children }) {
  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Book a restaurant reservation"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Flex as="header" p='2rem 0'>
          <Heading 
            as='h1' 
            size='md' 
            color='white' 
            bg='red.500'
            textTransform='uppercase'
            p='0.3rem 0.8rem'
            border='1px solid red.500'
          >
            {name}
          </Heading>
      </Flex>
      <main>{children}</main>
    </Container>
  )
}
