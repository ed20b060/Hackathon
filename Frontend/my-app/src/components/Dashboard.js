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
          </Stack>
        </Stack>
        {cards.map(menuOption => (
          <>
            <Box
              maxW={'3300px'}
              w={'full'}
              boxShadow={'2xl'}
              rounded={'md'}
              overflow={'hidden'}
            >
              <Stack textAlign={'center'} p={1} align={'center'}>
                <Text
                  fontSize={'sm'}
                  fontWeight={500}
                  p={2}
                  px={3}
                  color={'green.500'}
                  rounded={'full'}
                >
                  {menuOption}
                </Text>
                <Stack direction={'row'} align={'center'} justify={'center'}>
                  <Text fontSize={'3xl'}>$</Text>
                  <Text fontSize={'6xl'} fontWeight={800}>
                    79
                  </Text>
                  <Text color={'gray.500'}>/month</Text>
                </Stack>
              </Stack>

              <Box px={1} py={5}>
                <Button
                  mt={10}
                  w={'full'}
                  bg={'green.400'}
                  color={'white'}
                  rounded={'xl'}
                  boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                  _hover={{
                    bg: 'green.500',
                  }}
                  _focus={{
                    bg: 'green.500',
                  }}
                >
                  Go to project
                </Button>
              </Box>
            </Box>
            <br />
          </>
        ))}
      </Container>
    </>
  );
}
