import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Projects', 'Team'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map(link => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar
                  size={'sm'}
                  src={
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAY1BMVEX///8AAAAPDw/29vbv7+8zMzOmpqatra2ioqIqKir8/PwGBgZZWVnMzMzBwcFVVVWHh4e0tLQ5OTnb29tubm6amprU1NQYGBhgYGDj4+NPT091dXWPj49KSkp+fn4eHh5BQUEJvIjZAAACL0lEQVRoge3b2ZaCMAyAYcMyyCIo7rvv/5QzHscFKrRJk17lfwC/I9KCEicTWkV2bMuyXWUx8QWIZfAqC+nO4aN5OHcBnRah3Djtwmmoz7n3hsO95aoPV2HcJO3DaRIEXvZdKJdB4JkBw0xhkWoTrsXRuL5UVxO+NpdachepV6b5biX1vtfbMfZetJZgbeojbnqTu7kA+YaRLeZ28N284HL3DcYFaPY8rvthfsZzuDdY9h6DbF6LnPK+XiU0F8DzEh1bN42htn5b6I7qAux83B+6C/BDd/c+LgB9OY9ejOytqO6XWw1c1BsT5E5p1tBc0pbVjbaBeSylZ6QltY/84YhyYmf217VH+dZ+4IAPeLfgcAHwdyPei/gRfilPeWD8hn3kgY9o2Pj2TStFwzwugMIKK6ywwgorrLDCCiussMIKK6ywwmYsv2TeQ/6ayeYiZa+nL/0QP+6xugBTV5fpZ0y0zO46yszH2VkWcR3OMMZ11M2yqsRciyx0nB+NHG2B8/mzwTMsQY8/4MqHHt+bw3i8DY72KRwOZnh+OlYUZnxT09yLHZJwi7yMLJU527jeZw6XkFzCnbR2uBWBHZ6h45+Pu2TM7JvJTPHbR2FIgy4OWaediNNM1r5MdHeTmnMuzuPuWWQV37NMwwhO0p/G3JOcO3p+SZ1Zj4rB7asV+4D/5YETTO7Eeslfp8v5pshHmt367C3MP0P+dpLO8T7L/y/kXbI4VXlZ5tVpQbxZ/gVfcyW3SmhpKgAAAABJRU5ErkJggg=='
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(link => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
