import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Signin from './components/Signin';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Project from './components/Project';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/project" element={<Project />} />
          {/* <Route path="/cart" element={<Cartpage />} />
          <Route path="/sign-in" element={<SignPage />} />  */}
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
