import {
  Heading,
  Box,
  Text,
  Divider,
} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

export type RestaurantProps = {
  name: string;
  cuisine: string;
  priceRange: string;
  rating: string;
  description: string;
}

export default function Restaurant( { data }: RestaurantProps ) {
  return (
    <Box mt='6'>
      <Heading as='h1'>{data.name}</Heading>
      <Box display='flex' alignItems='center'>
        <Box display='flex' alignItems='center'>
          <StarIcon w={3} h={3} color="red.500" mr='1'/>
          <Text color="red.500">{data.rating}</Text>
        </Box>
        <Box borderRadius='lg' bg='gray.500' h='1' w='1' ml='2' mr='2'></Box>
        <Box as='span'>{data.cuisine}</Box>
        <Box borderRadius='lg' bg='gray.500' h='1' w='1' ml='2' mr='2'></Box>
        <Box as='span'>{data.priceRange}</Box>
      </Box>
      <Divider mb='4' mt='4'/>
      <Box>
        <Heading as='h2' size='sm'>Description</Heading>
        <Text>{data.description}</Text>
      </Box>
    </Box>
  )
}
