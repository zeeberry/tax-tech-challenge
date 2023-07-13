import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Heading,
  Box,
  Text,
  Divider,
  Select,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { PhoneIcon, EmailIcon} from '@chakra-ui/icons'


export default function ReservationForm() {
  return (
    <Box>
      <form>
        <VStack mb='4' align='stretch' spacing='4'>
          <Box>
            <FormControl>
              <FormLabel htmlFor='name'>Name</FormLabel>
              <Input
                id='name'
                placeholder='Name'
              />
            </FormControl>
          </Box>
          <Box>
            <FormLabel htmlFor='phone'>Email Address</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents='none'>
                <EmailIcon color='gray.300' />
              </InputLeftElement>
              <Input
                type='email'
                placeholder='Email Address'
              />
            </InputGroup>
          </Box>
          <Box>
            <FormLabel htmlFor='phone'>Phone Number</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents='none'>
                <PhoneIcon color='gray.300' />
              </InputLeftElement>
              <Input
                type='tel'
                placeholder='Phone number'
              />
            </InputGroup>
          </Box>
        </VStack>
        <HStack spacing='24px'>
          <Box>
            <FormLabel htmlFor='guests'>Guests</FormLabel>
            <Select
              placeholder='Select Guests'
            >
              <option value='1'>1 Guest</option>
              <option value='2'>2 Guests</option>
              <option value='3'>3 Guests</option>
              <option value='4'>4 Guests</option>
              <option value='5'>5 Guests</option>
              <option value='6'>6 Guests</option>
              <option value='7'>7+ Guests</option>
            </Select>
          </Box>
          <Box>
            <FormLabel htmlFor='date'>Date</FormLabel>
            <Input
              placeholder="Select Date"
              type="date"
            />
          </Box>
          <Box>
            <FormLabel htmlFor='guests'>Time</FormLabel>
            <Select
              placeholder='Select Time Slot'
            >
              <option value='1'>5:00 PM</option>
              <option value='2'>5:30 PM</option>
              <option value='3'>6:00 PM</option>
              <option value='4'>6:30 PM</option>
              <option value='5'>7:00 PM</option>
              <option value='6'>7:30 PM</option>
              <option value='7'>8:00 PM</option>
              <option value='8'>8:30 PM</option>
              <option value='9'>9:00 PM</option>
              <option value='10'>9:30 PM</option>
            </Select>
          </Box>
        </HStack>
        <Button mt={4} colorScheme='teal' type='submit'>
          Reserve
        </Button>
      </form>
    </Box>
  )
}
