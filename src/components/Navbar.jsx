import { Box, Button, Flex, Heading , Spacer, Text, HStack, useToast, Avatar, AvatarBadge } from "@chakra-ui/react";

export default function Navbar() {
  const toast = useToast()

  const showToast = () => {
    toast({
      title: 'Logged out',
      description: 'successfully logged out',
      duration: 5000,
      isClosable: true
    })
  }
  return (
    <Flex as="nav" p="10px" alignItems="center" mb="40px" gap="9px">
      <Heading as="h1">CS Tasks</Heading>        
      <Spacer />
      <HStack spacing="10px">
      <Avatar src="/img/peach.png">
        <AvatarBadge width="1.3em" bg="teal.500">
          <Text fontSize="xs" color="white">9</Text>
        </AvatarBadge>   
      </Avatar>
      <Text>Zetray123@gmail.com</Text>
      <Button colorScheme="blue" onClick={showToast}>Logout</Button>
      </HStack>
    </Flex>
    /*<Flex bg="gray.200" justify="space-around" >
        <Box w="150px" h="50px" bg="red">1</Box>
        <Box w="150px" h="50px" bg="blue">2</Box>
        <Box w="150px" h="50px" flexGrow="1" bg="green">3</Box>
        <Box w="150px" h="50px" bg="yellow">4</Box>
    </Flex>*/
  )
}
