import {
  Container,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Textarea,
  Select,
  Flex,
  Button,
  Divider,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalOverlay,
  Modal,
  useDisclosure,
  MenuButton,
  MenuItem,
  MenuList,
  Menu,
} from '@chakra-ui/react';
import { React, useState, useEffect } from 'react';
import Navbar from './Navbar';
import { db } from '../firebase-config2';
import {
  collection,
  addDoc,
  Timestamp,
  query,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';
export default function Project() {
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState('');
  const [budget, setBudget] = useState(0);
  const [marketing, setMarketing] = useState(0);
  const [finance, setFinance] = useState(0);
  const [salary, setSalary] = useState(0);
  const [dict, setDict] = useState([]);
  const [tasks, setTasks] = useState([]);

  // const initialRef = React.useRef(null);
  // const finalRef = React.useRef(null);
  //create a form with a customizable dropdown menu that displays a form input for selected field.
  let type = null;
  let options = null;
  const [input, setInput] = useState('');
  const [field, setField] = useState('');
  const [field2, setField2] = useState('');
  const [fields, setFields] = useState([]);

  const [selectedFile, setSelectedFile] = useState(null);
  const [selected, setSelected] = useState('type1');
  const [additionalProperties, setAdditionalProperties] = useState([
    'marketing',
    'finance',
    'salaries',
  ]);

  const [menu, setMenu] = useState([
    'Software',
    'Social Activities',
    'Events',
    'Loss',
  ]);

  const changeSelectOptionHandler = event => {
    setSelected(event.target.value);
  };

  const handleNewField = e => {
    const value = e.target.value;
    setField(value);
  };
  const handleSelectedFile = e => {
    setSelectedFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  const addField = e => {
    e.preventDefault();
    setAdditionalProperties([...additionalProperties, field]);
    setMenu([...menu, field]);
    setDict([...dict, { 1: { field }, 2: { field2 } }]);
    console.log(dict);
    setField('');
  };
  const handleMenuItem = e => {
    const value = e.target.value;
    setField(value);
  };
  const addMenuItem = e => {
    e.preventDefault();
    setAdditionalProperties([...additionalProperties, field]);
  };

  if (type) {
    options = type.map(el => <option key={el}>{el}</option>);
  }
  const handleInputChange = e => setField(e.target.value);
  const handleInputChange2 = e => setField2(e.target.value);
  const submit = async e => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'tasks2'), {
        name: name,
        total_budget: budget,
        marketing: marketing,
        finance: finance,
        salary: salary,
        other_fields: dict,
      });
      onClose();
    } catch (err) {
      alert(err);
    }
  };

  const isError = input === '';
  return (
    <>
      <Navbar />
      <Container maxW="60rem" mx="auto" px={4} py={6}>
        <Heading as="h1" size="lg" textAlign="center">
          Add your details
        </Heading>
        <VStack spacing={8}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Total Budget</FormLabel>
            <Input
              id="Total Budget"
              value={budget}
              onChange={e => setBudget(e.target.value)}
            />
          </FormControl>

          {/* add a drop down menu to select from type 1 2 3 */}
        </VStack>
      </Container>
      <Divider orientation="horizontal" />
      <div float="left" width="50%">
        <Heading as="h2" size="lg" textAlign="center">
          Add budget details
        </Heading>
      </div>
      <Container maxW="30rem" mx="auto" px={4} py={6}>
        <div>
          <div float="right" width="50%">
            <VStack spacing={8}>
              {additionalProperties.map(option => (
                <FormControl>
                  <FormLabel htmlFor="input">{option}</FormLabel>
                  <Input
                    id={option}
                    value={input}
                    onChange={e => setMarketing(e.target.value)}
                  />
                  <FormErrorMessage>This field is required.</FormErrorMessage>
                </FormControl>
              ))}
              <Button type="submit" onClick={onOpen}>
                Add field
              </Button>
              <Button onClick={submit}>Submit</Button>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Add new field</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel>Field name</FormLabel>
                      <Input
                        placeholder="New Field"
                        id="lab_item_ID"
                        value={field}
                        onChange={handleInputChange}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>or Choose from given options</FormLabel>
                      <Menu>
                        <MenuButton as={Button}>Options</MenuButton>
                        <MenuList>
                          {}
                          {menu.map(menuOption => (
                            <MenuItem
                              onClick={handleMenuItem}
                              value={menuOption}
                            >
                              {menuOption}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </Menu>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Input</FormLabel>
                      <Input
                        placeholder="New Field"
                        id="Input value"
                        value={field2}
                        onChange={handleInputChange2}
                      />
                    </FormControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={addField}>
                      Add
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </VStack>
          </div>
        </div>
      </Container>
    </>
  );
}
