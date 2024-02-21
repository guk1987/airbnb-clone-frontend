import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { FaComment, FaGithub } from "react-icons/fa";
export default function SocialLogin() {
  return (
    <Box mb={4}>
    <HStack my={8}>
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
        <Button colorScheme="telegram" w= "100%" leftIcon={<FaGithub/>}>
            Continue with Github
        </Button>
        <Button colorScheme="yellow" w = "100%" leftIcon={<FaComment/>}>
            Continue with KaKao
        </Button>
    </VStack>
    </Box>

  );
}