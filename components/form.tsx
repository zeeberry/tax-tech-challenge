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
  useToast,
} from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";

export default function ReservationForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const toast = useToast();

  function onSubmit(values) {
    console.log(JSON.stringify(values, null, 2));
    const postData = async () => {
      const response = await fetch("/api/reserve", {
        method: "POST",
        body: JSON.stringify(values),
      });
      return response.json();
    };

    return postData().then((data) => {
      console.log(data);
      toast({
        title: data.message,
        description: "Thank you for making a reservation",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    });
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack mb="4" align="stretch" spacing="4">
          <Box>
            <FormControl isInvalid={errors.name}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                placeholder="Name"
                {...register("name", {
                  required: "This is required",
                })}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
          </Box>
          <Box>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <EmailIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="email"
                placeholder="Email Address"
                {...register("email", { required: true })}
              />
            </InputGroup>
          </Box>
          <Box>
            <FormLabel htmlFor="phone">Phone Number</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <PhoneIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="tel"
                placeholder="Phone number"
                {...register("phone", { required: true })}
              />
            </InputGroup>
          </Box>
        </VStack>
        <HStack spacing="24px">
          <Box>
            <FormLabel htmlFor="guests">Guests</FormLabel>
            <Select
              placeholder="Select Guests"
              {...register("guests", { required: true })}
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
              <option value="6">6 Guests</option>
              <option value="7">7+ Guests</option>
            </Select>
          </Box>
          <Box>
            <FormLabel htmlFor="date">Date</FormLabel>
            <Input
              placeholder="Select Date"
              type="date"
              {...register("date", { required: true })}
            />
          </Box>
          <Box>
            <FormLabel htmlFor="guests">Time</FormLabel>
            <Select
              placeholder="Select Time Slot"
              {...register("time", { required: true })}
            >
              <option value="1">5:00 PM</option>
              <option value="2">5:30 PM</option>
              <option value="3">6:00 PM</option>
              <option value="4">6:30 PM</option>
              <option value="5">7:00 PM</option>
              <option value="6">7:30 PM</option>
              <option value="7">8:00 PM</option>
              <option value="8">8:30 PM</option>
              <option value="9">9:00 PM</option>
              <option value="10">9:30 PM</option>
            </Select>
          </Box>
        </HStack>
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Reserve
        </Button>
      </form>
    </Box>
  );
}
