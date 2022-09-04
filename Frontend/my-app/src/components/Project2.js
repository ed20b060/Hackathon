import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalOverlay,
  Modal,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  useDisclosure,
  List,
  ListItem,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase-config2';
export default function Simple() {
  const [tasks, setTasks] = useState([]);
  const [dataIdToBeUpdated, setDataIdToBeUpdated] = useState('');
  const [updatedName, setUpdatedName] = useState('');
  const [updatedMarketing, setUpdatedmarketing] = useState(0);
  const [updatedFinance, setUpdatedFinance] = useState(0);
  const [updatedSalary, setUpdatedSalary] = useState(0);

  useEffect(() => {
    db.collection('tasks2').onSnapshot(snapshot => {
      setTasks(
        snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  const updateData = e => {
    e.preventDefault();
    db.collection('customersData').doc(dataIdToBeUpdated).update({
      name: updatedName,
      marketing: updatedMarketing,
      finance: updatedFinance,
      salary: updatedSalary,
    });

    setUpdatedFinance(0);
    setUpdatedSalary(0);
    setUpdatedmarketing(0);
    setUpdatedName('');
    setDataIdToBeUpdated('');
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Stack spacing={{ base: 6, md: 10 }}>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }
          >
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}
              >
                Projects
              </Text>

              {tasks?.map(({ id, data }) => (
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem key={id}>
                      <Text
                        fontSize={{ base: '16px', lg: '18px' }}
                        color="yellow"
                        fontWeight={'500'}
                        textTransform={'uppercase'}
                        mb={'4'}
                      >
                        Name of project
                      </Text>

                      <Text
                        fontSize={{ base: '16px', lg: '18px' }}
                        fontWeight={'500'}
                        textTransform={'uppercase'}
                        mb={'4'}
                      >
                        {data.name}
                      </Text>
                      <Text> Total budget: {data.budget}</Text>
                      <Text> Marketing: {data.marketing}</Text>
                      <Text> Finance: {data.finance}</Text>
                      <Text> Salary: {data.salary}</Text>
                    </ListItem>
                    <Box>
                      <Text
                        fontSize={{ base: '16px', lg: '18px' }}
                        color="yellow"
                        fontWeight={'500'}
                        textTransform={'uppercase'}
                        mb={'4'}
                      >
                        Other Details
                      </Text>
                      {data.other_fields.map((el, index) => (
                        <ListItem key={index}>
                          <Text>
                            {el[1].field} : {el[2].field2}
                          </Text>
                          {/* <Text>{el[2].field2}</Text> */}
                        </ListItem>
                      ))}
                    </Box>
                    <Button onClick={onOpen}>Open Modal</Button>

                    <Modal isOpen={isOpen} onClose={onClose}>
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Create your account</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                          <FormControl>
                            <FormLabel>name</FormLabel>
                            <Input
                              placeholder="First name"
                              onChange={e => {
                                setUpdatedName(e.target.value);
                              }}
                            />
                          </FormControl>

                          <FormControl mt={4}>
                            <FormLabel>Marketing</FormLabel>
                            <Input
                              placeholder="Marketing"
                              onChange={e => {
                                setUpdatedmarketing(e.target.value);
                              }}
                            />
                          </FormControl>
                          <FormControl mt={4}>
                            <FormLabel>Finance</FormLabel>
                            <Input
                              placeholder="Finance"
                              onChange={e => {
                                setUpdatedFinance(e.target.value);
                              }}
                            />
                          </FormControl>
                          <FormControl mt={4}>
                            <FormLabel>Salary</FormLabel>
                            <Input
                              placeholder="Salary"
                              onChange={e => {
                                setUpdatedFinance(e.target.value);
                              }}
                            />
                          </FormControl>
                        </ModalBody>

                        <ModalFooter>
                          <Button
                            colorScheme="blue"
                            mr={3}
                            onClick={e => {
                              setDataIdToBeUpdated(id);
                              setUpdatedName(updatedName);
                              setUpdatedmarketing(updatedMarketing);
                              setUpdatedFinance(updatedFinance);

                              setUpdatedSalary(updatedSalary);
                            }}
                          >
                            Update
                          </Button>
                          <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </List>
                </SimpleGrid>
              ))}
            </Box>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
