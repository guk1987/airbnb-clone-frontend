import { Box, Button, Divider, HStack, IconButton, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, VStack, useDisclosure } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { FaAirbnb, FaMoon, FaUserNinja, FaLock } from "react-icons/fa";

export default function Root(){
    const{isOpen, onClose, onOpen} = useDisclosure();
    return (
        <Box>
            <HStack justifyContent={"space-between"} py = {4} px = {2} borderBottomWidth={1}>
                <Box color = "red.500">
                    <FaAirbnb size={48}/>  
                </Box>
                <HStack spacing = {"2"}>
                    <IconButton aria-label = "Toggle dark mode" icon={<FaMoon/>} variant={"ghost"}/>
                    <Button onClick={onOpen} >Log in</Button>
                    <Button colorScheme="red">Sign up</Button>
                </HStack>
                <Modal onClose = {onClose} isOpen = {isOpen}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Log in</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <VStack>
                                <InputGroup>
                                    <InputLeftElement children={
                                        <Box color={"gray.500"}>
                                            <FaUserNinja/>
                                        </Box>
                                        
                                    }/>
                                    <Input variant={"filled"}placeholder="Username"/>
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement children={
                                        <Box color={"gray.500"}>
                                            <FaLock/>
                                        </Box>
                                    }/>
                                    <Input variant={"filled"}placeholder="Password"/>
                                </InputGroup>               
                            </VStack>
                            <Button mt={4} w={"100%"} colorScheme="red">Log in</Button>
                            <HStack>
                                <Divider/>
                                <Text
                                    textTransform={"uppercase"}
                                    color={"gray.400"}
                                    fontSize={"xs"}
                                    as={"b"}
                                    >
                                        Or
                                </Text>
                                <Divider/>
                            </HStack>
                            <VStack>
                                <Button colorScheme="telegram" w= "100%">
                                    Continue with Github
                                </Button>
                                <Button colorScheme="yellow" w = "100%" mb = "2">
                                    Continue with KaKao
                                </Button>
                            </VStack>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </HStack>
            <Outlet />
        </Box>
    ); 
}