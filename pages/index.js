import {
  Container,
  Box,
  Input,
  Button,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";

import { Logo } from "../components";

export default function Home() {
  return (
    <Container p={4} centerContent>
      <Logo />
      <Box p={4} mt={8}>
        <Text>Create your custom calendar</Text>
      </Box>

      <Box>
        <FormControl id="email" p={4} isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>

        <FormControl id="password" p={4} isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>

        <Box display="flex" flexDirection="row" alignItems="center">
          <Text>clocker.work</Text>
          <FormControl id="username" p={4} isRequired>
            <Input type="password" />
          </FormControl>
        </Box>

        <Box p={4}>
          <Button width="100%" p={4}>
            Entrar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
