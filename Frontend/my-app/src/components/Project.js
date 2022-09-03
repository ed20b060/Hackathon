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
import { React, useState } from 'react';
import Navbar from './Navbar';

export default function Project() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const initialRef = React.useRef(null);
  // const finalRef = React.useRef(null);
  //create a form with a customizable dropdown menu that displays a form input for selected field.
  let type = null;
  let options = null;
  const [input, setInput] = useState('');
  const [field, setField] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [selected, setSelected] = useState('type1');
  const [additionalProperties, setAdditionalProperties] = useState([
    'Marketing',
    'Finance',
    'Salaries',
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
  const handleInputChange = e => setInput(e.target.value);

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
            <Input id="name" value={input} onChange={handleInputChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Total Budget</FormLabel>
            <Input
              id="Total Budget"
              value={input}
              onChange={handleInputChange}
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
                    onChange={handleInputChange}
                  />
                  <FormErrorMessage>This field is required.</FormErrorMessage>
                </FormControl>
              ))}
              <Button onClick={onOpen}>Add field</Button>

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
                        onChange={handleNewField}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>or Choose from given options</FormLabel>
                      <Menu>
                        <MenuButton as={Button}>Options</MenuButton>
                        <MenuList>
                          {/* <MenuItem>Download</MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem> */}
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
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={addField}>
                      Add
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>

              {/* add a drop down menu to select from type 1 2 3 */}
            </VStack>
          </div>
        </div>
      </Container>
    </>
  );
}
