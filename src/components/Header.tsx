import { Box, Button, HStack, IconButton, LightMode, Stack, useColorMode, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { FaAirbnb, FaMoon, FaSun } from "react-icons/fa";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

export default function Header() {
    const{isOpen:isLoginOpen, onClose:onLoginClose, onOpen:onLoginOpen} = useDisclosure();
    const{isOpen:isSignUpOpen, onClose:onSignUpClose, onOpen:onSignUpOpen} = useDisclosure();
    const { toggleColorMode } = useColorMode();
    const logoColor = useColorModeValue("red.500", "red.200");
    const Icon = useColorModeValue(FaMoon, FaSun);
    return (
        <Stack
            justifyContent={"space-between"} 
            alignItems={"center"}
            py = {5} 
            px = {40} 
            direction={{
                sm: "column",
                md: "row",
            }}
            spacing={{
                sm: 4,
                md: 0,
            }}
            borderBottomWidth={1}
            >
            <Box color = {logoColor}>
                <FaAirbnb size={48}/>  
            </Box>
            <HStack spacing = {"2"}>
                <IconButton onClick={toggleColorMode} aria-label = "Toggle dark mode" icon={<Icon/>} variant={"ghost"}/>
                <Button onClick={onLoginOpen} >Log in</Button>
                <LightMode>
                    <Button onClick={onSignUpOpen} colorScheme="red">Sign up</Button>
                </LightMode>
            </HStack>
            <LoginModal isOpen={isLoginOpen} onClose={onLoginClose}/>
            <SignupModal isOpen={isSignUpOpen} onClose={onSignUpClose}/>
        </Stack>
        );
    }