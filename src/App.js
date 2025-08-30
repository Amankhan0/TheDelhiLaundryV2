import * as React from 'react'
import '@fontsource/hind-vadodara/300.css';
import '@fontsource/hind-vadodara/400.css';
import '@fontsource/hind-vadodara/500.css';
import '@fontsource/hind-vadodara/600.css';
import '@fontsource/hind-vadodara/700.css';
import './App.css'
import Navigation from './Navigation/Navigation/Main';
import { ChakraProvider } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

export default function App() {

const { pathname } = useLocation();

  React.useEffect(()=>{
    window.scrollTo(0, 0);
  },[pathname])

  
  return (
      <ChakraProvider>
          <Navigation />
      </ChakraProvider>
  )
}
