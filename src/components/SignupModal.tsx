import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack } from "@chakra-ui/react";
import { FaEnvelope, FaLock, FaUserNinja, FaUserSecret } from "react-icons/fa";
import SocialLogin from "./SocialLogin";

interface SignupModalProps {
    isOpen: boolean;
    onClose: () => void;

}

export default function SignupModal({isOpen, onClose}: SignupModalProps) {
    return (
        <Modal onClose = {onClose} isOpen = {isOpen}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Sign in</ModalHeader>
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
                                <InputGroup>
                                    <InputLeftElement children={
                                        <Box color={"gray.500"}>
                                            <FaUserSecret/>
                                        </Box>
                                    }/>
                                    <Input variant={"filled"}placeholder="Name"/>
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement children={
                                        <Box color={"gray.500"}>
                                            <FaEnvelope/>
                                        </Box>
                                    }/>
                                    <Input variant={"filled"}placeholder="Email"/>
                                </InputGroup>               
                            </VStack>
                            <Button mt={4} w={"100%"} colorScheme="red">Sign up</Button>
                            <SocialLogin/>
                        </ModalBody>
                    </ModalContent>
                </Modal>


    );
}