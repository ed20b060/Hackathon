import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { CheckIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export default function Dashboard(props) {
  const navigate = useNavigate();
  const [cards, setCards] = useState(['Project 1', 'Project 2', 'Project 3']);

  return (
    <>
      <Navbar />
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            Your Budget
            <br />
          </Heading>

          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <Button
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}
              onClick={() => {
                navigate('/project');
                props.onClickStore();
              }}
            >
              Create Project
            </Button>
            <Button
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}
              onClick={() => {
                navigate('/project2');
                props.onClickStore();
              }}
            >
              view projects
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
